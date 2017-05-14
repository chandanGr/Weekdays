var React = require("react-native");
var {
  Text,
  View,
  AppRegistry
} = React;

var HelloWorld = React.createClass({
  
  render: function(){
    
    return 
      <Text>
        this is a text
      </Text>
    
  }
  
});

AppRegsitry.registerComponent("HelloWorld", () => HelloWorld);