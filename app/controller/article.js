'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  index() {
    this.ctx.body = {
      data: [
        { title: 'aaa', desc: 'aaa' },
      ],
    };
  }
}

module.exports = ArticleController;
