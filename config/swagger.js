const path = require("path");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const route = path.join(__dirname, "../api/favs/favs.controller.js");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Favs API",
      version: "1.0.0",
      description: "Documentation of API FAVS with node JS",
      license: {
        name: "ISC",
        url: "https://opensource.org/licenses/ISC",
      },
      contact: {
        name: "Adrian Villa",
        url: "https://www.linkedin.com/in/adrian-villa-776783175/",
        email: "adriancvilla@gmail.com",
      },
    },
    servers: [
      {
        url: `http://localhost:8080`,
        description: "Running on local server",
      },
    ],
    components: {
      schemas: {
        allFavsListResponse: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                description: 'Favs list name',
                example: 'My list',
              },
              favs: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    title: {
                      type: 'string',
                      description: 'Naming the fav',
                      example: 'My favorite car',
                    },
                    description: {
                      type: 'string',
                      description: 'A description of the fav',
                      example: 'Nissan R34 with turbocharger',
                    },
                    link: {
                      type: 'string',
                      description: 'link to see the fav',
                      example: 'https://www.pistonheads.com/buy/listing/13243644',
                    },
                  },
                },
              },
            },
          },
        },
        singleFavsListResponse: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'Fav list name',
              example: 'My new list',
            },
            favs: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  title: {
                    type: 'string',
                    description: 'Name of the fav',
                    example: 'My favorite car',
                  },
                  description: {
                    type: 'string',
                    description: 'A description of the fav',
                    example: 'Nissan R34 with turbocharger',
                  },
                  link: {
                    type: 'string',
                    description: 'link to see the fav',
                    example: 'https://www.pistonheads.com/buy/listing/13243644',
                  },
                },
              },
            },
          },
        },
        favListNotFound: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              description: 'Fav list not found',
              example: 'Fav list not found',
            },
          },
        },
        unauthorized: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              description: 'Message error',
              example: 'unauthorized',
            },
          },
        },
        NotImplemented: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              description: 'Message error',
              example: 'Not implemented',
            }
          }
        },
        serverError: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              description: 'Message of the error',
              example: 'Internal server error',
            },
          },
        },
      },
      BodyRequest: {
        favsListRequest: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'Fav list name',
              example: 'My new list',
            },
            favs: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  title: {
                    type: 'string',
                    description: 'Naming the fav',
                    example: 'My favorite car',
                  },
                  description: {
                    type: 'string',
                    description: 'A description of the fav',
                    example: 'Nissan R34 with turbocharger',
                  },
                  link: {
                    type: 'string',
                    description: 'link to see the fav',
                    example: 'https://www.pistonheads.com/buy/listing/13243644',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  apis: [route],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app, port) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.get("/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  console.log(`Swagger docs running on http://localhost:${port}/docs`);
}

module.exports = swaggerDocs;
