const environment = process.env.NODE_ENV || "development";

const errorMessage = (key, doc) =>
  `You need to configure the environment variable ${key}. ${doc}`;

const entry = options => {
  let value = process.env[options.key];

  if (value === undefined && options.defaults) {
    value = options.defaults[environment];
  }

  if (value === undefined && options.defaults) {
    value = options.defaults.all;
  }

  if (value === undefined && options.required) {
    throw errorMessage(options.key, options.doc);
  }

  return value;
};

module.exports = {
  environment,

  log: {
    level: entry({
      key: "LOG_LEVEL",
      doc: "Logging level.",
      defaults: { all: "debug" },
      required: true
    })
  },

  server: {
    host: entry({
      key: "HOST",
      doc: "Protocol, host and port where the server is exposed to clients.",
      defaults: { development: "http://localhost:8080" },
      required: true
    }),

    port: entry({
      key: "PORT",
      doc: "Port on which the server is exposed to clients.",
      defaults: { development: 8080 },
      required: true
    }),

    protocol: entry({
      key: "PROTOCOL",
      doc: "Protocol by which the server is exposed to clients.",
      defaults: { development: "http", production: "https" },
      required: true
    })
  },

  gcloud: {
    datastore: {
      projectId: entry({
        key: "GCLOUD_DATASTORE_PROJECTID",
        doc: "Google cloud platform project id for the datastore services.",
        defaults: { development: "world-fishing-827" },
        required: true
      }),

      namespace: entry({
        key: "GCLOUD_DATASTORE_NAMESPACE",
        doc:
          'Namespace to scope all datastore operations to. On development this should be set to something unique to the user, such as "andres--api"',
        required: true
      })
    }
  }
};
