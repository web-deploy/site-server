'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 articles 表
  up: (queryInterface, Sequelize) => {
    const {
      INTEGER,
      STRING,
      TEXT,
      DATE,
    } = Sequelize;
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('articles', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: INTEGER,
      },
      articleid: {
        type: INTEGER,
        allowNull: false,
      },
      title: {
        type: STRING(64),
        allowNull: false,
      },
      content: {
        type: TEXT,
        defaultValue: '',
      },
      description: {
        type: STRING(500),
        allowNull: true,
      },
      poster: {
        type: STRING(200),
        allowNull: false,
        defaultValue: '',
      },
      status: INTEGER,
      tags: {
        type: STRING(20),
        allowNull: false,
      },
      category: {
        type: STRING(20),
        allowNull: false,
      },
      view: {
        type: INTEGER,
        defaultValue: 0,
      },
      created_at: {
        type: DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      updated_at: {
        type: DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
    }, {
      charset: 'utf8',
      timestamps: false,
    });
  },
  down: async queryInterface => {
    await queryInterface.dropTable('articles');
  },
};
