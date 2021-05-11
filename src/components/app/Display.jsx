import React from 'react';
import PropTypes from 'prop-types';


const Display = ({ colourChange}) => (
    <div style={{ background: colourChange}}><br/><br/><br/><br/><br/><br/><br/><br/></div>
);

Display.propTypes = {
    colourChange: PropTypes.func.isRequired
};

export default Display;