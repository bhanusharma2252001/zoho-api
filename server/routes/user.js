const User = require("../models/User");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const axios = require('axios')
const router = require("express").Router();

//GET USER
router.get("/find/:id", async (req, res) => {
  try {
    const response =  await axios({
      method: 'get',
      url: 'https://www.zohoapis.in/crm/v3/Leads?fields=Last_Name,Email,First_Name&per_page=10',
      headers: {'Authorization': 'Zoho-oauthtoken 1000.722bf3851701fbf8b1dcfa8705082f72.488fdcc0eb2f6f1738c607d128441626'},
    })
    const response1=await User.insertMany(response.data.data)
    console.log("response",response.data)
    res.status(200).send(response1);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

//GET ALL USER
router.get("/", async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
