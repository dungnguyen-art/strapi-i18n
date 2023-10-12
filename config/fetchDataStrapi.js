module.exports = {
  postCount: {
    task: async ({ strapi }) => {
      const count = await strapi.entityService.count("api::article.article", {
        publicationState: "live",
      });

      console.log(`crontask2----- count ${count} (run by Strapi cron)`);
      try {
        await strapi.plugins.email.services.email.send({
          to: "dungtpa2@gmail.com",
          from: "noreply@strapi.com",
          subject: "Post count",
          text: `You have ${count} published articles`,
          html: `You have ${count} published articles`,
        });
      } catch(err) {
        // Commented out for demo purposes
        //console.error(err);
      }
    },
    options: {
      // Every minute
      rule: "*/3 * * * *",
    },
  },
};