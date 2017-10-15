const mongoose = require('mongoose');
const User = mongoose.model('users');
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  app.post('/api/going', requireLogin, async (req, res) => {
    const { restaurant } = req.body.params;
    const userGoing = req.user.going;
    userGoing.push(restaurant);
    const user = await req.user.save();
    res.send(user);
  });
  app.post('/api/cancel', requireLogin, async (req, res) => {
    const { restaurant } = req.body.params;
    const userGoing = req.user.going;
    userGoing.remove(restaurant);
    const user = await req.user.save();
    res.send(user);
  })
};
