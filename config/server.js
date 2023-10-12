const cronTasks1 = require("./fetchDataStrapi")
const cronTasks = require("./cron-tasks1")
const cronTasks_i18n = require("./i18n-v3-cron")
const crontask_create = require("./cron-task-create")

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
    enabled: true,
    tasks:{
      ...cronTasks,
      ...cronTasks1,
      ...crontask_create
    }
  },
});
