'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 books 表
  up: (queryInterface, Sequelize) => {
    const {
      INTEGER,
      STRING,
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
      title: {
        type: STRING(64),
        allowNull: false,
      },
      description: {
        type: STRING(500),
        allowNull: true,
      },
      poster: STRING(100),
      status: INTEGER,
      like: INTEGER,
      created_at: {
        allowNull: false,
        type: DATE,
      },
      updated_at: {
        allowNull: false,
        type: DATE,
      },
    }, {
      charset: 'utf8',
      paranoid: true,
      timestamps: false,
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('books');
  },
};
