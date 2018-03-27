import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Search from './Search';
import { getVideos } from '../actions';

export const Nav = (props) => {
  return (
    <div className="nav">
      <Search {...props} />
    </div>
  )
}

Nav.propTypes = {
  getVideos: PropTypes.func.isRequired,
}

export default connect(null, {getVideos})(Nav);