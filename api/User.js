const express = require("express");
const router = express.Router();
const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, async (req, res) => {
  const { userId } = req;

  try {
    const user = await UserModel.findOne({_id:userId})
    if (!user) {
      return res.status(404).send("User not found");
    }


    return res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});
router.post("/", async (req, res) => {
  const {name,email,img} = req.body;

  try {

   

   

 
  let user = await UserModel.findOne({ email:email })
    if (!user) {
      user = new UserModel({
        name:name,
        email: email,
     profilePicUrl:img

      });
 
      await user.save();
    }


    const payload = { userId: user._id };
    jwt.sign(payload, process.env.JwtSecret, { expiresIn: "2d" }, (err, token) => {
      if (err) throw err;
   
      res.json(token);
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});

module.exports = router;
