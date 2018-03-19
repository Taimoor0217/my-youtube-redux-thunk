import React from 'react';
import PropTypes from 'prop-types';

import Search from './Search';

const Nav = (props) => {
  return (
    <div className="nav">
      <Search {...props} />
    </div>
  )
}

Nav.propTypes = {
}

export default Nav;