import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';

import Search from './Search';
import * as actions from '../actions';

export const Nav = props => (
  <div className="nav">
    <Search {...props} />
  </div>
);

Nav.propTypes = {
  getVideos: func.isRequired,
}

export default connect(null, { getVideos: actions.getVideos })(Nav);