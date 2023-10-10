// const cronTasks = require("./githubToStrapiCron")
const cronTasks = require("./cron-tasks")
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  cron: {
    enabled: false,
    tasks: cronTasks,
  },
});