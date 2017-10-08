var Yelp = require('yelp');
const keys = require('../config/keys');

var yelp = new Yelp({
  consumer_key: keys.yelpClientID,
  consumer_secret: keys.yelpClientSecret,
});

yelp.search({ term: 'food', location: 'Montreal' })
.then(function (data) {
  console.log(data);
})
.catch(function (err) {
  console.error(err);
});
