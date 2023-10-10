module.exports = {
    routes: [
      {
        method: "GET",
        path: "/articles/count", // tai sao lai co 's' tai article
        handler: "article.count", // tai sao khong co 's' tai article
      },
    ],
  };