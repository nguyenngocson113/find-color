import React, {Component} from "react";
import {Text, View,Image,ScrollView,StyleSheet,TouchableOpacity} from "react-native";
import GridView from "react-native-easy-grid-view";
import Main from './Main.js';
var {height, width} = require('Dimensions').get('window');
var Width = 300;

export default class Test extends Component {
  constructor(props){
    super(props);
    var rgb = [];
    var rgb1=[];
    for(var i = 0; i < 3; i++){
        var a = Math.floor(Math.random() * 255);
        rgb.push(a);
        rgb1.push(a);
      }
    this.state={
      Score: 0,
      backgroundColor:'rgb('+ rgb.join(',') +')',
      backgroundColor1:'rgba('+ rgb1.join(',') +',0.2)',
      opacity:0
    }
  }
    close(){
      this.props.navigator.push({name:"main",Score:this.state.Score})
    }
    success(){
      var rgb = [];
      var rgb1=[];

    for(var i = 0; i < 3; i++){
        var a = Math.floor(Math.random() * 255);
        rgb.push(a);
        rgb1.push(a)
    }
    this.setState({
      opacity: this.state.opacity+0.05
    })
    rgb1.push(this.state.opacity)
      this.setState({
        Score:++this.state.Score,
        backgroundColor:'rgb('+ rgb.join(',') +')',
        backgroundColor1:'rgba('+ rgb1.join(',') +')',

      })

    }
          render(){
            var images = []
              var a = Math.floor(Math.random() * (35+1))+1
            for (var i = 0; i < 36; i++) {
              if(i != a){
              images.push(
                      <TouchableOpacity key={i}
                  activeOpacity={ 0 }
                  style={[styles.item,{backgroundColor:this.state.backgroundColor}]}
                  onPress={this.close.bind(this)}
                >
                </TouchableOpacity>
              )
            }else {
              images.push(
                <TouchableOpacity key={i}
            activeOpacity={ 0 }
            style={[styles.item,{backgroundColor:this.state.backgroundColor1}]}
            onPress={this.success.bind(this)}
          >
          <Text>{this.props.nam}</Text>
          </TouchableOpacity>
              )
            }
          }
            return (
              <View style={styles.bao}>
                  <View style={styles.bao1}>
                    <Text style={[styles.welcome, {paddingTop:10},{flex:1},{color:"#F47C7C"}]}>SCORE
                    </Text>
                    <Text style={[styles.welcome,{flex:2},{fontSize:50}]}>{this.state.Score}</Text>
                  </View>
                    <View style={styles.container}>
                      {images}

                  </View>
              </View>
            );

          }
        }

var styles = StyleSheet.create({
  bao: {
    flex: 1,
    flexDirection:"column",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#A5DEF1"

  },
  bao1:{
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#A5DEF1",
    marginTop:10
  },

  container: {
    flex: 3,
    backgroundColor: "#A5DEF1",
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },

  item: {
    borderWidth:2,
    borderRadius: 10,
    borderColor:'white',
    width: Width / 5,
    height: Width / 5
  },
  welcome: {
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold'
    },


});
