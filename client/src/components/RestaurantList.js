import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoingButton from './GoingButton';

class RestaurantList extends Component {
  renderRestaurants() {
    return this.props.restaurants.map(restaurant => {
      return (
        <div
          style={{ height: '160px' }}
          className="card horizontal"
          key={restaurant.id}
        >
          <div className="card-image">
            <img
              style={{ height: '160px', width: '160px' }}
              src={restaurant.image_url}
            />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <span className="card-title">{restaurant.name}</span>
              <span className="right">
                <GoingButton
                  id={restaurant.id}
                />
              </span>
              <p>{restaurant.review_count} Review</p>
              <p>{restaurant.categories[0].title}</p>
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

function mapStateToProps({ restaurants, auth }) {
  return { restaurants, auth };
}

export default connect(mapStateToProps)(RestaurantList);
