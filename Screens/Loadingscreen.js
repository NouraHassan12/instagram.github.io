import React, { Component } from 'react';
import {View , Text , StyleSheet , ActivityIndicator} from 'react-native';
// import * as firebase from 'firebase';
import firebase from 'firebase';




export default class Loadingscreen extends Component {

  componentDidMount(){
    firebase.auth().onAuthStateChanged(user=>{
      this.props.navigation.navigate(user ? 'App' :'Auth');
    })
  }

  

  render() {
    return (
    
     <View style={Styles.container}>
         <Text>Loading ...</Text>
         <ActivityIndicator size="large" ></ActivityIndicator>
     </View>
  

    );
  }
}




const Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})