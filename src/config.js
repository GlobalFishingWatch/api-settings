const greenpeace = require("./greenpeace");

const environments = {
  development: {
    inherits: ["all"]
  },

  test: {
    inherits: ["development", "all"]
  },

  production: {
    inherits: ["all"]
  }
};

module.exports = greenpeace.sanitizeEnvironment(environments, {
  log: {
    level: greenpeace.entry({
      key: "LOG_LEVEL",
      doc: "Logging level.",
      defaults: { all: "debug" },
      required: true
    })
  },

  server: {
    host: greenpeace.entry({
      key: "HOST",
      doc: "Protocol, host and port where the server is exposed to clients.",
      defaults: { development: "http://localhost:8080" },
      required: true
    }),

    port: greenpeace.entry({
      key: "PORT",
      doc: "Port on which the server is exposed to clients.",
      defaults: { development: 8080 },
      required: true
    }),

    protocol: greenpeace.entry({
      key: "PROTOCOL",
      doc: "Protocol by which the server is exposed to clients.",
      defaults: { development: "http", production: "https" },
      required: true
    })
  },

  gcloud: {
    datastore: {
      projectId: greenpeace.entry({
        key: "GCLOUD_DATASTORE_PROJECTID",
        doc: "Google cloud platform project id for the datastore services.",
        defaults: { development: "world-fishing-827" },
        required: true
      }),

      namespace: greenpeace.entry({
        key: "GCLOUD_DATASTORE_NAMESPACE",
        doc:
          'Namespace to scope all datastore operations to. On development this should be set to something unique to the user, such as "andres--api"',
        defaults: { test: "dummy" },
        required: true
      })
    }
  }
});
