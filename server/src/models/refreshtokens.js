'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RefreshTokens extends Model {
    static associate(models) {
      RefreshTokens.belongsTo(models.User, {
        foreignKey: 'userId',
        targetKey: 'id',
      });
    }
  }
  RefreshTokens.init(
    {
      value: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      fingerprint: DataTypes.STRING,
      ua: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'RefreshTokens',
      timestamps: true,
    }
  );
  return RefreshTokens;
};
