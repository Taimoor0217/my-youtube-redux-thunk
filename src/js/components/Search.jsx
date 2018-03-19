import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class Search extends Component {

  constructor() {
    super();
    this.localHandler = this.localHandler.bind(this);
    this.localHandler = _.debounce(this.localHandler, 500);
  }

  localHandler(e) {
    const { getVideos } = this.props;
    getVideos(this.input.value);
  }

  render() {
    return (
      <div className="search col-md-6 col-md-offset-4 form-inline">
        <input 
          type="text"
          className="form-control"
          ref={(elem)=>this.input=elem}
          onChange={this.localHandler}
        />
        <button className="btn">
          <span className="glyphicons glyphicons-search"></span>
        </button>
      </div>
    );
  }
}

Search.propTypes = {
}

export default Search;