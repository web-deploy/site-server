'use strict';

// exlint-disable-next-line
module.exports = () => {
  return async function(ctx, next) {
    await next();

    if (ctx.body instanceof Error) {
      ctx.body = {
        code: -1,
        data: {},
        msg: ctx.body.message,
      };
      return;
    }

    ctx.body = {
      code: 0,
      data: ctx.body,
      msg: '请求成功',
    };

  };
};
