const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const UserModel  = require("../models/UserModel");


router.post("/update", authMiddleware, async (req, res) => {
    try {
      const { userId } = req;
  
      const {profile} = req.body;
      console.log("habsdgva",profile)
      const user = await UserModel.findOne({_id:userId})
   
       
      if(profile.name)
      {user.name=profile.name}
      user.progress="25"
      user.country=profile.country
      user.dob=profile.date
      user.gender=profile.gender
      user.number=profile.number
      user.martialStatus=profile.status
  
//     if(studyprefernce.studyprefernce)
//     {
//       user.studyprefernce={
//       course:studyprefernce?.course,
//       countrypref:studyprefernce?.countrypref,
//       prefcource:studyprefernce?.prefcource,
//       intake:studyprefernce?.intake,
//       budge:studyprefernce?.budge,
//       objective:studyprefernce?.objective
//       }
//     }
//     if(experience.experience)
//     {
//        user.experience={
//          jobrole:experience.jobrole,
//          company:experience.company,
//          jobdis:experience.jobdis,
//          startdate:experience.startdate,
//          enddate:experience.enddate,
//        }
//     }
//     if(education.education)
//     {
//  user.education={
//      ten:{percentage:education.ten},
        
     
//      twel:{
//          percentage:education.twl
//      },
//      graduation:{
//          cgpa:education. cgpa
//      },
//      postgradutation:{
//          cgpa:education.postcgpa
//      },
//  }
// }
await user.save();
      return res.status(200).send("Success");
    } catch (error) {
      console.error(error);
      return res.status(500).send("Server Error");
    }
  });

  module.exports = router;