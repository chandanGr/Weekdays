import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet} from 'react-native';

//Create Component
var value;
class DayItem extends Component {
  
  color() {
    var opacity = (1/(2*this.props.daysUntil));
    return  "rgba(0, 0, 0, "+ opacity +")";
  }
  fontWeight() {
    var weight = 100 - 7*(this.props.daysUntil);
    return 'weight';
  }
  fontSize() {
    return (60 - 6 * (this.props.daysUntil))
  }
  lineHeight() {
    return (70 - 4* (this.props.daysUntil))
  }

  style() {
    return{
      color: this.color(),
      fontWeight: '100',
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()
    }
  }
  render() {
    return (
      <Text style = {this.style()}>
        {this.props.day}
      </Text>  
    );
  }
}

module.exports = DayItem;