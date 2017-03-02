/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  navigator
} from 'react-native';
import Main from './Components/Main.js';
import Test from './Components/Test.js';
var score = 0 ;var that;
class DEMO extends Component {
  constructor(props){
    super(props);
    this.state={
      score : 0
    }
    var that = this;
  }
  renderScene(route,navigator){
    switch (route.name) {
      case "main": return(

        <Main navigator={navigator} diem={route.Score}/>


       );
      case "play": return(
        <Play navigator={navigator} />
      );
      case "test": return(
        <Test navigator={navigator} />
      );
      default:

    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{name:"main"}}
        renderScene = {this.renderScene}
      />
    );
  }
}
class Application extends Component {
  render() {
    const menu = <Menu navigator={navigator}/>;

    return (
      <SideMenu menu={menu}>
        <ContentView/>
      </SideMenu>
    );
  }
}
AppRegistry.registerComponent('DEMO', () => DEMO);
