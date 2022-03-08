const express = require("express");
const router = express.Router();
const User = require('../models/User')

//Create a User using: POST "/api/auth/". Doesnt require Auth
router.post('/', (req, res) => {
    const user = User(req.body)
    user.save();
    res.send(req.body);
});
module.exports = router;
