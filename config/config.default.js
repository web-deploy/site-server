/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1578120577266_4222';

  // add your middleware config here
  config.middleware = [ 'responce' ];

  // 七牛云
  config.qiniu = {
    ak: 'taQLzZ1CwfP6974ao0HK8CaC4E4cx5ibCpgcyx6J',
    sk: 'ukmCUtsglI9W9Rt2U6uaM5q4PFyMnPyGiHgHvjRr',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
