'use strict';

/**
 * i18n-v3 controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::i18n-v3.i18n-v3', ({strapi}) => ({
    async find(ctx) {
        // ctx.query = { ...ctx.query, local: "en" };
        // const { data, meta } = await super.find(ctx);
        // return { data, meta};
        const entries = await strapi.entityService.findMany('api::i18n-v3.i18n-v3', {
          fields: ["key", "en", "vi", "ja", "zh", "es"]
        });
        return entries
      },
}));
