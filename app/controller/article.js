'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async index() {
    this.ctx.body = await this.ctx.service.article.index();
  }

  async create() {
    const { ctx } = this;
    const result = await ctx.service.article.create();
    ctx.body = {
      data: result,
    };
  }

  async show() {
    const { ctx } = this;
    const result = await ctx.service.article.show();
    ctx.body = result;
  }

  async uptate() {
    const { ctx } = this;
    const result = await ctx.service.article.update();
    ctx.body = result;
  }
}

module.exports = ArticleController;
