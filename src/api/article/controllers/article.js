"use strict";

/**
 * Article controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::article.article", ({ strapi }) => ({
  async createAction(ctx) {
    const entry = await strapi.entityService.create("api::article.article", {
      data: {
        title: "Son Hyung Min",
        description: "singer",
        slug: "10",
      },
    });
    // ctx.send(entry);
    return entry;
  },
  async find(ctx) {
    // ctx.query = { ...ctx.query, local: "en" };
    // const { data, meta } = await super.find(ctx);
    // meta.date = Date.now();
    // return { data, meta };
    const entries = await strapi.entityService.findMany('api::article.article', {
      fields: ["title", "description", "slug", "body"]
    });
    return entries
  },
  async findOne(ctx) {
    const {id} = ctx.params;
    // const {query} = ctx;

    // const entity = await strapi.service('api::article.article').findOne(id, query);
    // const sanitzedEntity = await this.sanitizeOutput(entity, ctx);

    // return this.transformResponse(sanitzedEntity)
    const entry = await strapi.entityService.findOne(
      "api::article.article",
      id,
      {
        fields: ["title", "description", "slug", "body"],
      }
    );
    return entry;
  },
  async update() {
    const entry = await strapi.entityService.update('api::article.article', 1, {
      data: {
        title: 'anthony',
        description: 'rotate compa',
        slug: '07',
      },
    });
    return entry;
  }
}));
