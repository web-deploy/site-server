'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async index() {
    this.ctx.body = await this.ctx.service.article.getAdminArticles();
  }

  async show() {
    const result = await this.ctx.service.article.showDetail();
    this.ctx.body = result;
  }

  async destroy() {
    const result = await this.ctx.service.article.destroy();
    this.ctx.body = result;
  }
}

module.exports = ArticleController;
