'use strict';

/*
 * Copyright (c) 2018 Topcoder, Inc. All rights reserved.
 */
const _ = require('lodash');
const { Statuses } = require('../constants');

/*
 * Badge model definition
 */
module.exports = (sequelize, DataTypes) => sequelize.define('Badge', {
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  saluteCount: { type: DataTypes.BIGINT, allowNull: false, defaultValue: 0 },
  shareCount: { type: DataTypes.BIGINT, allowNull: false, defaultValue: 0 },
  status: {
    type: DataTypes.ENUM,
    allowNull: false,
    defaultValue: Statuses.Requested,
    values: _.values(Statuses),
  },
  viewCount: { type: DataTypes.BIGINT, allowNull: false, defaultValue: 0 },
  createdBy: { type: DataTypes.BIGINT, allowNull: false },
  updatedBy: DataTypes.BIGINT,
}, {});
