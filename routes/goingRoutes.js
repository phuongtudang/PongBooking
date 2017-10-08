const mongoose = require('mongoose');
const User = mongoose.model('users');
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  app.post('/api/going', requireLogin, async (req, res) => {
    const { restaurant } = req.body.params;
    const userGoing = req.user.going;
    userGoing.includes(restaurant)? userGoing.remove(restaurant) : userGoing.push(restaurant);
    const user = await req.user.save();
    console.log(user);
    res.send(user);
  });
};
