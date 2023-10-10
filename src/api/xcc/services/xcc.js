'use strict';

/**
 * xcc service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::xcc.xcc');
