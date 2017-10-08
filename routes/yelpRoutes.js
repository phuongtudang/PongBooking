const keys = require('../config/keys');
const yelp = require('yelp-fusion');

const client = yelp.client(keys.yelpToken);

module.exports = app => {
  app.get('/api/yelp', (req, res) => {
    const location = req.query.city;
    client
      .search({
        term: 'food',
        location: location
      })
      .then(response => {
        const restaurants = response.jsonBody.businesses;
        res.send(restaurants);
      })
      .catch(e => {
        console.log(e);
      });
  });
};
