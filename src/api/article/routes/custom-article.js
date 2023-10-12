module.exports = {
    routes: [
      {
        method: "GET",
        path: "/article/create", 
        handler: "article.createAction",
        config: {
            auth: false,
        }
      },
    ],
  };