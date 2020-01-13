'use strict';

const Controller = require('egg').Controller;

class UploadController extends Controller {
  async getToken() {
    const { ctx } = this;
    const token = await ctx.service.upload.getToken();
    ctx.body = {
      token,
    };
  }

  async getImageUrl() {
    const ctx = this.ctx;
    const { key } = ctx.query;
    const imgUrl = await ctx.service.upload.getImageUrl(key);
    ctx.body = {
      imgUrl,
    };
  }
}

module.exports = UploadController;
