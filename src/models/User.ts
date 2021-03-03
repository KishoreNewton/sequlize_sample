import { INTEGER, Model, NUMBER, Sequelize, STRING } from 'sequelize';
import { sequelize } from '../index';

module.exports = sequelize.define('user_details', {
  user_id: {
    type: INTEGER({
      length: 11
    }),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: STRING({
      length: 100
    }),
    allowNull: false,
    unique: true
  },
  contact_number: {
    type: INTEGER,
    allowNull: true,
    unique: true
  },
  password: {
    type: STRING({
      length: 100
    })
  }
});
