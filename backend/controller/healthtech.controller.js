const User = require("../model/User");
const HealthMetrics = require("../model/HealthMetrics");
const ActivityGrowth = require("../model/ActivityGrowth");
const BodyParts = require("../model/BodyParts");
const UserInfo = require("../model/UeserInfo");

const bcrypt = require("bcryptjs");

const { generateJwtToken } = require("../helper/generateJwtToken");

exports.getPediatricianInfo = async (req, res) => {
  User.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.register = async (req, res) => {
  const r = req.body;

  // Encrypt Password
  const salt = await bcrypt.genSalt(10);
  const encryptPass = await bcrypt.hash(r.password, salt);

  r.password = encryptPass;

  User.create(r)
    .then((data) => {
      res.send({
        message: "User Created",
      });
    })
    .catch((err) => {
      res.send({
        message: err.message,
      });
    });
};

exports.login = async (req, res) => {
  const r = req.body;

  // Encrypt Password

  User.find({ email: r.email })
    .then((data) => {
      // Decrypt Password
      const result = bcrypt.compareSync(r.password, data[0].password);
      // If true password matched if false not match

      if (result === true) {
        // generate jwt token here and add in response

        const Id = data[0]._id.valueOf();
        const tokenResp = generateJwtToken(Id);

        res.send({
          message: "Login Successfully",
          token: tokenResp,
        });
      } else {
        res.send({
          message: "Password is incorrect",
        });
      }
    })
    .catch((err) => {
      res.send({
        message: "Email id is incorrect",
      });
    });
};

// Get APIs of HealthTech

exports.getHealthMetrics = async (req, res) => {
  HealthMetrics.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({
        message: err.message,
      });
    });
};

exports.getActivityGrowth = async (req, res) => {
  ActivityGrowth.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({
        message: err.message,
      });
    });
};

exports.getbodyparts = async (req, res) => {
  BodyParts.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({
        message: err.message,
      });
    });
};

// Post APIs for HealthTech

exports.insertHealthMetrics = async (req, res) => {
  const r = req.body;

  HealthMetrics.create(r)
    .then((data) => {
      res.send({
        message: "HealthMatrics Inserted",
      });
    })
    .catch((err) => {
      res.send({
        message: err.message,
      });
    });
};

exports.insertActivityGrowth = async (req, res) => {
  const r = req.body;

  ActivityGrowth.create(r)
    .then((data) => {
      res.send({
        message: "Activity Growth Inserted",
      });
    })
    .catch((err) => {
      res.send({
        message: err.message,
      });
    });
};

exports.insertBodyParts = async (req, res) => {
  const r = req.body;

  BodyParts.create(r)
    .then((data) => {
      res.send({
        message: "Body Parts Inserted",
      });
    })
    .catch((err) => {
      res.send({
        message: err.message,
      });
    });
};

exports.insertusersinfo = async (req, res) => {
  const r = req.body;

  UserInfo.create(r)
    .then((data) => {
      res.send({
        message: "Userinfo Created",
      });
    })
    .catch((err) => {
      res.send({
        message: err.message,
      });
    });
};

exports.getusersinfo = async (req, res) => {
  const userEmail = req.body.email;

  User.findOne({ email: userEmail })
    .then((data) => {
      UserInfo.find({ email: data.email })
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.send({
            message: err.message,
          });
        });
    })
    .catch((err) => {
      res.send(err);
    });
};
