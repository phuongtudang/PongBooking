import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        <div className="container" style={{ margin: "50px auto" }}>
          <h5 className="center-align" style={{ margin: "10px 10px" }}>
            Search for restaurants and RSVP ahead of time!
          </h5>
          <div className="center-align">
            <i className="fa fa-cutlery fa-3x" style={{ margin: "10px 10px" }} aria-hidden="true"></i>
            <i className="fa fa-coffee fa-3x" style={{ margin: "0px 10px" }} aria-hidden="true"></i>
            <i className="fa fa-thumbs-o-up fa-3x" style={{ margin: "0px 10px" }} aria-hidden="true"></i>
          </div>
          <SearchBar />
          <RestaurantList />
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(App);