const { verifyJwtToken } = require("../middleware/auth.js");

const getPediatrician = (app) => {
  const auth = verifyJwtToken;

  const healthTech = require("../controller/healthtech.controller");

  const router = require("express").Router();

  // Get getPediatrician Route

  //router.get("/getPediatricianInfo", auth, healthTech.getPediatricianInfo);
  router.get("/getPediatricianInfo", healthTech.getPediatricianInfo);

  // Register Route
  router.post("/register", healthTech.register);

  // Login Route
  router.post("/login", healthTech.login);

  app.use("/api", router);
};

module.exports = getPediatrician;
