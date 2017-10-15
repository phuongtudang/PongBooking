import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoingButton from './GoingButton';

class RestaurantList extends Component {
  renderRestaurants() {
    return this.props.restaurants.map(restaurant => {
      return (
        <div
          style={{ height: '160px', border: 'solid #ebc074 2px' }}
          className="card horizontal z-depth-0"
          key={restaurant.id}
        >
          <div className="card-image">
            <img
              style={{ height: '100%', width: '160px' }}
              src={restaurant.image_url}
            />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <a href={restaurant.url} target="_blank">
                <span className="card-title">{restaurant.name}</span>
              </a>
              <span className="right">
                <GoingButton restaurantId={restaurant.id} />
              </span>
              <p>{restaurant.review_count} Reviews</p>
              <p>{restaurant.categories.length === 0 ? 'NA' : restaurant.categories[0].title}</p>
              <p>
                Address: {restaurant.location.address1},{' '}
                {restaurant.location.city}
              </p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderRestaurants()}</div>;
  }
}

function mapStateToProps({ restaurants }) {
  return { restaurants };
}

export default connect(mapStateToProps)(RestaurantList);
