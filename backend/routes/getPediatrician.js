const getPediatrician = (app) => {
  const healthTech = require("../controller/healthtech.controller");

  const router = require("express").Router();
  router.get("/getPediatricianInfo", healthTech.getPediatricianInfo);

  app.use("/api", router);
};

module.exports = getPediatrician;
