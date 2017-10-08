import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li key="twitterSign">
            <i className="fa fa-twitter fa-2x" />
          </li>,
          <li key="signin">
            <a style={{ fontSize: '18px' }} href="/auth/twitter">
              Sign in with Twitter
            </a>
          </li>
        ];
      default:
        return [
          <li style={{ fontSize: '18px' }} key="name">
            Sign in as {this.props.auth.twitterDisplayName}
          </li>,
          <li key="logout">
            <a href="/api/logout" className="btn blue">
              Logout
            </a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper container">
          <ul className="right hide-on-med-and-down">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
