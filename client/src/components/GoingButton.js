import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class GoingButton extends Component {
  componentWillUpdate(nextProps) {
    if (nextProps.auth) {
      nextProps.fetchUser();
    }
  }

  goingButton() {
    if (!this.props.auth) {
      return <a>Sign In to book</a>;
    } else if (this.props.auth.going.includes(this.props.restaurantId)) {
      return (
        <a
          className="btn-flat red lighten-1 white-text"
          onClick={() => this.props.updateCancel(this.props.restaurantId)}
        >
          CANCEL
        </a>
      );
    }
    return (
      <a
        className="btn-flat orange lighten-1 white-text"
        onClick={() => this.props.updateGoing(this.props.restaurantId)}
      >
        BOOK
      </a>
    );
  }

  render() {
    return <span>{this.goingButton()}</span>;
  }
}

function mapStateToProps({ auth, going, cancel }) {
  return { auth, going, cancel };
}

export default connect(mapStateToProps, actions)(GoingButton);
