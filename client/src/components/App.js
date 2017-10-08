import React, { Component } from 'react';
import { connect } from 'react-redux';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import * as actions from '../actions';

import Header from './Header';
import SearchBar from './SearchBar';
import RestaurantList from './RestaurantList';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <Header />
        <div
          className="container"
          style={{ margin: '50px auto', width: '60%' }}
        >
          <h5 className="center-align" style={{ margin: '10px 10px' }}>
            Search for RESTAURANTS and RSVP ahead of time!
          </h5>
          <div className="center-align">
            <i
              className="fa fa-cutlery fa-3x"
              style={{ margin: '10px 10px' }}
              aria-hidden="true"
            />
            <i
              className="fa fa-coffee fa-3x"
              style={{ margin: '0px 10px' }}
              aria-hidden="true"
            />
            <i
              className="fa fa-thumbs-o-up fa-3x"
              style={{ margin: '0px 10px' }}
              aria-hidden="true"
            />
          </div>
          <SearchBar />
          <RestaurantList />
        </div>
        <Alert stack={{ limit: 1 }} timeout={5000} />
      </div>
    );
  }
}

export default connect(null, actions)(App);
