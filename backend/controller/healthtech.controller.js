const User = require("../model/User");

exports.getPediatricianInfo = async (req, res) => {
  const insertUser = {
    name: "Shubham",
    email: "spal5776@gmail.com",
    password: "12345",
    date: Date.now(),
    role: "Admin",
    token: "shshshsskskk125ss@3",
  };

  User.create(insertUser)
    .then((data) => {
      console.log("InsertionData:", data);
      res.send({
        message: "User Created",
      });
    })
    .catch((err) => {
      res.send(err);
    });
};
