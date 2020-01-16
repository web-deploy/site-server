'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Article = app.model.define('article', {
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
      type: STRING(1000),
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
    status: {
      type: INTEGER,
      defaultValue: 0,
    },
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
    createdAt: {
      allowNull: false,
      defaultValue: new Date(),
      type: DATE,
    },
    updatedAt: {
      allowNull: false,
      defaultValue: new Date(),
      type: DATE,
    },
  });


  return Article;
};
