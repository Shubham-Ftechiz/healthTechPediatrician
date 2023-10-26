const User = require("../model/User");
const bcrypt = require("bcryptjs");

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

  // Decrypt Password

  const result = bcrypt.compareSync(r.password, encryptPass);
  // If true password match if false not match

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
      // If true password match if false not match

      if (result === true) {
        // generate jwt token here and add in response
        res.send({
          message: "Login Successfully",
          token: "Generate Token",
        });
      } else {
        res.send({
          message: "Check email or password1",
        });
      }
    })
    .catch((err) => {
      res.send(err);
    });
};
