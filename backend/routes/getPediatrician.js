const getPediatrician = (app) => {
  const healthTech = require("../controller/healthtech.controller");

  const router = require("express").Router();

  // Get getPediatrician Route
  router.get("/getPediatricianInfo", healthTech.getPediatricianInfo);

  // Register Route
  router.post("/register", healthTech.register);

  // Login Route
  //router.get("/login", healthTech.login);

  app.use("/api", router);
};

module.exports = getPediatrician;
