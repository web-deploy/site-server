'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

const PRE = '/api/v1';
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get(`${PRE}/user`, controller.user.index);
};
