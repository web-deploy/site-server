'use strict';

const Service = require('egg').Service;
const qiniu = require('qiniu');

class UploadService extends Service {
  // 获取上传token
  async getToken() {
    const { app } = this;
    const { ak, sk } = app.config.qiniu;
    const mac = new qiniu.auth.digest.Mac(ak, sk);
    const options = {
      scope: 'luxixi-site',
      expires: 7200,
    };
    const putPolicy = new qiniu.rs.PutPolicy(options);
    const uploadToken = putPolicy.uploadToken(mac);
    return uploadToken;
  }

  async getImageUrl(key) {
    const { app } = this;
    const { ak, sk } = app.config.qiniu;
    const mac = new qiniu.auth.digest.Mac(ak, sk);
    const config = new qiniu.conf.Config();
    const bucketManager = new qiniu.rs.BucketManager(mac, config);
    const privateBucketDomain = 'http://cdn.img.luxixi.site';
    const deadline = parseInt(Date.now() / 1000) + 3600;
    const privateDownloadUrl = bucketManager.privateDownloadUrl(privateBucketDomain, key, deadline);
    return privateDownloadUrl;
  }
}

module.exports = UploadService;
