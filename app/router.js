'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

const PRE = '/api/v1';
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get(`${PRE}/user`, controller.user.index);
  router.resources(`${PRE}/article`, controller.article);

  // 上传
  router.get(`${PRE}/upload/getToken`, controller.upload.getToken);
  router.get(`${PRE}/upload/getImgUrl`, controller.upload.getImageUrl);

  require('./router/admin')(app);
};
