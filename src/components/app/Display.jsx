import React from 'react';
import PropTypes from 'prop-types';


const Display = ({ colourChange}) => {
    function change() {
        var color = colors[Math.floor(Math.random() * colors.length)];
        
        var dis = <div style={{ background: color }}><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>

        return dis
      }
    //setInterval(change, 1000)

    return change()
    };

Display.propTypes = {
    colourChange: PropTypes.func.isRequired
};

export default Display;