
import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
var DayItem = require("./src/day-item");
var Moment = require("moment"); 

//var DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];

class MyApp extends Component{
    days(){
        var daysItems = [];
        for(var i=0; i<7; i++){
            var day = Moment().add(i, 'days').format("dddd");
            daysItems.push(
                <DayItem day = {day} daysUntil = {i} />
            )    
        }
        return daysItems;
    }
    render(){
        return (
            <View style = {styles.container}>
                {this.days()}
            </View>
        );
    }
}
var styles = StyleSheet.create({
    container:{
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    }
});

AppRegistry.registerComponent("MyApp", () => MyApp);