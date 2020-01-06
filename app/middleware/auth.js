'use strict';

const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

module.exports = (options, app) => {
  function verifyToken(token) {
    const cert = fs.readFileSync(path.join(__dirname, '../keys/rsa_public_key.pem'));
    let res = {};
    try {
      const result = jwt.verify(token, cert, { algorithms: [ 'RS256' ] }) || {};
      const { exp } = result;
      const now = Math.floor(Date.now() / 1000);

      if (now <= exp) {
        res = result.data || {};
      }

    } catch (error) {
      console.log(error);
    }
    return res;
  }
  return async function auth(ctx, next) {
    const token = ctx.get('Authorization');
    // const token = verifyToken(ctx.get('Authorization'));

    if (token) {
      const result = verifyToken(token);
      const { userid } = result;

      if (userid) {
        const redis_token = await app.redis.get(userid);

        if (token === redis_token) {
          await next();
        } else {
          ctx.body = new Error('您已经在其他设备登录，如果继续将清除其他设备登录状态');
        }
      } else {
        ctx.status = 401;
        ctx.body = new Error('您的登录状态已过期，请重新登录');
      }

    } else {
      ctx.status = 401;
      ctx.body = new Error('您还没有登录，请需登录后进行操作');
    }
    // ctx.status = 401;
    // ctx.body = new Error('需登录后进行操作');
    // return;
  };
}
;
