'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  index() {
    this.ctx.body = {
      data: {
        username: 'zhangsan',
        age: 18,
      },
    };
  }
}

module.exports = UserController;
