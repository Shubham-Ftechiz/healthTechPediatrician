const dashbord = (app) => {
  const healthTech = require("../controller/healthtech.controller");

  const router = require("express").Router();

  router.get("/healthmetrics", healthTech.getHealthMetrics);
  router.get("/activitygrowth", healthTech.getActivityGrowth);
  router.get("/bodyparts", healthTech.getbodyparts);

  router.post("/inserthealthmetrics", healthTech.insertHealthMetrics);
  router.post("/insertactivitygrowth", healthTech.insertActivityGrowth);
  router.post("/insertbodyparts", healthTech.insertBodyParts);

  app.use("/api", router);
};

module.exports = dashbord;
