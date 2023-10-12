

module.exports = {
  myJob: {
    task: async ({ strapi }) => {
      const entries = await strapi.entityService.findMany('api::i18n-v3.i18n-v3', {
        fields: ["key", "en", "vi", "ja", "zh", "es"]
      });
      console.log("crontTask3------------", entries);
      return entries
      
    },
    options: {
      // Every minute
      rule: "*/5 * * * *",
    },
  },
};
