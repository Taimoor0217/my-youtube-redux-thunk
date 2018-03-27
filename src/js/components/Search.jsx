import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class Search extends Component {

  constructor() {
    super();
    this.state = {
      value: ''
    }
    this.localHandler = this.localHandler.bind(this);
  }

  localHandler(e) {
    const { getVideos } = this.props;
    this.setState({
      value: e.target.value
    })
    getVideos(e.target.value);
  }

  render() {
    return (
      <div className="search col-md-6 col-md-offset-4 form-inline">
        <input 
          type="text"
          className="form-control"
          onChange={this.localHandler}
          value={this.state.value}
        />
        <button className="btn">
          <span className="glyphicons glyphicons-search"></span>
        </button>
      </div>
    );
  }
}

Search.propTypes = {
  getVideos: PropTypes.func.isRequired,
}