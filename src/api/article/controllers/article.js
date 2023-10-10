'use strict';

/**
 *  product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', {
    count(ctx) {
        var { query } = ctx.request
        return strapi.query('api::article.article').count({ where: query });
    }
});