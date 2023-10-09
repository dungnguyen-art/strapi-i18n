module.exports = {
    myJob: {
      task: async({ strapi }) => {
        /* Add your own logic here */
        
      },
      // only run once after 10 seconds
      options: new Date(Date.now() + 10000),
    },
  };