const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");

//USER REG
const registerUser = async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err, msg: "opps..! error at registration" });
  }
};

//USER LOGIN || JWT TOEKN
const loginUser = async (req, res) => {
  //encrypt password to pass here
  const email = req.body.email;
  const userId = req.body.userId;
  try {
    let userData = await User.findOne({ email: email });
    //db will return all userData if there any

    if (userData && userData.userId === userId) {
      //we are ok to proceed || GENERATE jwt
      const accessToken = jwt.sign(userData, process.env.JWT_KEY, {
        expiresIn: "30d",
      });

      res.status(200).json({ authorization: accessToken, user: userData });
    } else {
      res.status(500).json({ msg: "user not found or wrong credentials.." });
    }
  } catch (err) {
    res.status(500).json({ error: err, msg: "user not registered.." });
  }
};

const loginOrRegister = async (req, res) => {
  const email = req.body.email;
  const userId = req.body.userId;
  // console.log(req.body);
  try {
    let userData, accessToken;
    userData = await User.findOne({ email: email }); //db will return all userData if there any

    if (userData === null) {
      // user not registered || so reister
      const newUser = new User(req.body);
      userData = await newUser.save();

      accessToken = jwt.sign({ userData }, process.env.JWT_KEY, {
        expiresIn: "30d",
      });
      res.status(200).json({ authorization: accessToken, user: userData });
    } else if (userData?.userId === userId) {
      // user exist and uid matched | gen JWT
      accessToken = jwt.sign({ userData }, process.env.JWT_KEY, {
        expiresIn: "30d",
      });
      // console.log(accessToken);
      res.status(200).json({ authorization: accessToken, user: userData });
    } else {
      // user not found
      res.status(500).json({ msg: "wrong credentials or user not found.." });
    }
  } catch (err) {
    res.status(500).json({
      error: err,
      msg: "user information not found.. something went wrong..",
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  loginOrRegister,
};
