import React, { Component } from 'react';
import { connect } from 'react-redux';
import Alert from 'react-s-alert';
import { updateGoing, fetchUser } from '../actions';

class GoingButton extends Component {
  onClickSubmit(event) {
    this.props.updateGoing(event).then(setTimeout(this.props.fetchUser, 700));
    if (!this.props.auth.going) {
      Alert.warning('You need to login first!', {
        position: 'top-right',
        effect: 'bouncyflip',
        offset: 50
      });
    }
  }

  render() {
    let toggle = false;
    if (!this.props.auth.going) {
      toggle = false;
    } else if (this.props.auth.going.includes(this.props.id)) {
      toggle = true;
    }
    return (
      <a
        className="btn-flat orange lighten-2"
        onClick={this.onClickSubmit.bind(this, this.props.id)}
      >
        {toggle ? 'Click to cancel' : 'Click to go'}
      </a>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { updateGoing, fetchUser })(
  GoingButton
);
