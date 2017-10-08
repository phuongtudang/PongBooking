const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/twitter',
    passport.authenticate('twitter')
  );

  app.get(
    '/auth/twitter/callback',
    passport.authenticate('twitter'),
    (req, res) => {
      res.redirect('/')
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout(); //function from passport
    res.redirect('/')
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
