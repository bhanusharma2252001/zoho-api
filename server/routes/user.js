const User = require("../models/User");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const axios = require('axios')
const router = require("express").Router();

//INSERT USERS
router.get("/insert", async (req, res) => {
  try {
    const response =  await axios({
      method: 'get',
      url: 'https://www.zohoapis.in/crm/v3/Leads?fields=Last_Name,Email,First_Name&per_page=10',
      headers: {'Authorization': 'Zoho-oauthtoken 1000.738a923211c0e08c701cb31aaa02baf7.afa5b55554eeaaef42f69b9c64065398'},
    })
    const response1=await User.insertMany(response.data.data)
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
