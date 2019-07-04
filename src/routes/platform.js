const config = require("../config");

module.exports = app => {
  app.get("/platform", (req, res) => {
    res.json({ services: config.services });
  });
};
