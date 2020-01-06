'use strict';

module.exports = () => {
  const config = {};

  /**
   * @member Config#
   * @property {String} KEY - description
   */
  config.sequelize = {
    port: 3306,
    dialect: 'mysql',
    host: 'localhost',
    database: 'blog',
    username: 'root',
    password: '123456',
  };

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [ '*' ],
  };

  return config;
};
