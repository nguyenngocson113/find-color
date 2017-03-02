import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';
import Test from './Test.js'
export default class Main extends Component{
  constructor(props){
    super(props);

  }
  clickMe(){
    this.props.navigator.push({name:"test"})
  }
  render(){
    return(

      <Image style={styles.container} source={require('../img/bacground.jpg')}>
      <View ><Text style={styles.text}>YOUR SCORE {this.props.diem}</Text></View>
        <TouchableOpacity onPress={this.clickMe.bind(this)}>
        <Image style={styles.logo}
         source={require('../img/Button-Play-icon.png')}
       />
        </TouchableOpacity>
        </Image>
    );
  }
}
Main.PropType={
  Score:React.PropTypes.String
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode : 'cover'
  },
  text:{
    justifyContent: 'center',
    alignItems: 'center',
    color:"#303A52",
    fontWeight:'bold',
    fontSize:20,
    margin:30
  },
  logo:{
    width:50,
    height:50,

  },
  backgroundImage:{
    flex:1,
  }

});
