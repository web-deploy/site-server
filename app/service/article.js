'use strict';

const Service = require('egg').Service;

class ArticlesService extends Service {
  async index() {
    const { ctx } = this;
    const articles = await ctx.model.Article.findAll();
    return articles;
  }

  async create() {
    const { ctx } = this;
    const article = ctx.request.body;
    const id = ctx.helper.uuid(6, 8);
    article.articleid = id;
    try {
      const { articleid } = await ctx.model.Article.create(article);
      return { articleid };
    } catch (error) {
      console.log(error);
      throw Error('保存错误');
    }
  }

  async show() {
    const { ctx } = this;
    const { id } = ctx.params;
    const result = await ctx.model.Article.findOne({ where: { articleId: id } });
    return result;
  }
}

module.exports = ArticlesService;
