import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../actions';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(event){
      this.setState({term: event.target.value})
  }

  onFormSubmit(event){
      event.preventDefault();

      this.props.fetchRestaurants(this.state.term);
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit}>
        <div className="row">
          <input
            placeholder="Enter your city here.."
            className="form-control col s11"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <button type="submit" className="btn col s1">Submit</button>
        </div>
      </form>
    )
  }
}

function mapStateToProps({ restaurants }) {
  return { restaurants };
}

export default connect(mapStateToProps, { fetchRestaurants })(SearchBar);
