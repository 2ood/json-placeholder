const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "2ood's JSON Placeholder API server for Project [What Should I buy]",
        version: "1.0.0",
        description:
          "This is an API application ",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "2ood",
          url: "https://2ood.github.io/2ood",
          email: "kyungmin.official0@gmail.com",
        },
      },
      servers: [
        {
          url: "http://jsonplaceholder-2ood.vercel.app/api/what-should-i-buy",
        },
      ],
    },
    apis: ["./api/what-should-i-buy/controllers/*"],
  };

  module.exports = options;

  