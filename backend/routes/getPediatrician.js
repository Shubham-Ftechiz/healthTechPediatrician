const { verifyJwtToken } = require("../middleware/auth.js");

const getPediatrician = (app) => {
  const auth = verifyJwtToken;

  const healthTech = require("../controller/healthtech.controller");

  const router = require("express").Router();

  // Get getPediatrician Route

  router.get("/getPediatricianInfo", auth, healthTech.getPediatricianInfo);

  // Register Route
  router.post("/register", healthTech.register);

  // Login Route
  router.post("/login", healthTech.login);

  // UserInfo Routes
  router.post("/inseruserinfo", healthTech.insertusersinfo);

  // Get UserInfo
  router.get("/getusersinfo", healthTech.getusersinfo);

  app.use("/api", router);
};

module.exports = getPediatrician;
