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

  services: {
    pelagos: {
      server: greenpeace.entry({
        key: "API_PELAGOS_SERVER",
        doc: "Protocol, host and port for the pelagos API.",
        defaults: {
          development: "https://api-dot-world-fishing-827.appspot.com"
        },
        required: true
      }),

      openAPI: greenpeace.entry({
        key: "API_PELAGOS_OPENAPI",
        doc: "Path to the OpenAPI spec for the pelagos API.",
        defaults: { all: "api/v2" },
        required: true
      })
    },

    vessels: {
      server: greenpeace.entry({
        key: "API_VESSELS_SERVER",
        doc: "Protocol, host and port for the vessels API.",
        defaults: {
          development: "https://vessels.api.dev.globalfishingwatch.org"
        },
        required: true
      }),

      openAPI: greenpeace.entry({
        key: "API_VESSELS_OPENAPI",
        doc: "Path to the OpenAPI spec for the vessels API.",
        defaults: { all: "openapi.json" },
        required: true
      })
    },

    events: {
      server: greenpeace.entry({
        key: "API_EVENTS_SERVER",
        doc: "Protocol, host and port for the events API.",
        defaults: {
          development: "https://events.api.dev.globalfishingwatch.org"
        },
        required: true
      }),

      openAPI: greenpeace.entry({
        key: "API_EVENTS_OPENAPI",
        doc: "Path to the OpenAPI spec for the events API.",
        defaults: { all: "openapi.json" },
        required: true
      })
    },

    auth: {
      server: greenpeace.entry({
        key: "API_AUTH_SERVER",
        doc: "Protocol, host and port for the auth API.",
        defaults: {
          development: "https://auth.api.dev.globalfishingwatch.org"
        },
        required: true
      }),

      openAPI: greenpeace.entry({
        key: "API_AUTH_OPENAPI",
        doc: "Path to the OpenAPI spec for the auth API.",
        defaults: { all: "openapi.json" },
        required: true
      })
    },

    settings: {
      server: greenpeace.entry({
        key: "API_SETTINGS_SERVER",
        doc: "Protocol, host and port for the settings API.",
        defaults: {
          development: "https://settings.api.dev.globalfishingwatch.org"
        },
        required: true
      }),

      openAPI: greenpeace.entry({
        key: "API_SETTINGS_OPENAPI",
        doc: "Path to the OpenAPI spec for the settings API.",
        defaults: { all: "openapi.json" },
        required: true
      })
    }
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
