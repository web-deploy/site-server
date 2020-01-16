'use strict';

const ADMIN_PRE = '/api/v1/admin';
module.exports = app => {
  const { router, controller } = app;

  router.resources(`${ADMIN_PRE}/article`, controller.admin.article);


};
