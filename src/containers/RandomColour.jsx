import React, { Component } from 'react';
import Display from '../components/app/Display';


export default class RandomColour extends Component {
    state = {
        colors: ['black', 'red', 'white', 'green', 'blue'],
    };


    /*color = this.state.colours[Math.floor(Math.random() * this.state.colours.length)]
    
    
    handleColourChange = () => {
        var newColor = setInterval(this.color, 1000)
        return newColor
      };
      
      */

      render() {
          
          return (
              <>
              <Display 
              colors={this.state.colors}
              />
              </>
          )
      }

}