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
      allowNull: false,
      defaultValue: new Date().getTime(),
      type: DATE,
    },
    updated_at: {
      allowNull: false,
      defaultValue: new Date().getTime(),
      type: DATE,
    },
  }, {
    timestamps: true,
  });


  return Article;
};
