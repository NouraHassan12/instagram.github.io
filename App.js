import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer , createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Ionicons} from '@expo/vector-icons';
import {createStackNavigator} from 'react-navigation-stack';
import Homescreen from './Screens/Homescreen';
import Loadingscreen from './Screens/Loadingscreen';
import Loginscreen from './Screens/Loginscreen';
import Registerscreen from './Screens/Registerscreen';
import Bucketlistscreen from './Screens/Bucketlistscreen';
import * as firebase from 'firebase';
import 'firebase/firestore';
import ProfileTab from './Screens/Profilescreen';

import FirebaseKeys  from './config';
var firebaseConfig = FirebaseKeys
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// var firebaseConfig = {
//   apiKey: "AIzaSyCiWTxnQH1yy6DmrVZVVUPhGQWpNVDiyHo",
//   authDomain: "instgram-51100.firebaseapp.com",
//   databaseURL: "https://instgram-51100.firebaseio.com",
//   projectId: "instgram-51100",
//   storageBucket: "instgram-51100.appspot.com",
//   messagingSenderId: "1030571580637",
//   appId: "1:1030571580637:web:5f58a5b561eef2852b4f34"
// };










const AppContainer = createStackNavigator(
  {
    default:createBottomTabNavigator(
      {
        Newsfeed:{
          screen:Homescreen,
          navigationOptions:{
            tabBarIcon:({tintColor})=><Ionicons name="ios-home" size={24} color={tintColor} />
          }
        } ,
      
      
      
        Bucketlist:{
          screen:Bucketlistscreen,
          navigationOptions:{
            tabBarIcon:({tintColor})=><Ionicons name="ios-add-circle" size={24} color={tintColor} />
          }
        },
      

        Profile:{
          screen:ProfileTab,
          navigationOptions:{
            tabBarIcon:({tintColor})=><Ionicons name="ios-person" size={24} color={tintColor} />
          }
        },
       
      },

      {

        defaultNavigationOptions:{
          tabBarOnPress:({navigation , defaultHandler  })=>{
              if(navigation.state.key === "post"){
                navigation.navigate("postModal")
              } else{
                defaultHandler()
              }

            }
         
        },
        tabBarOptions:{
          activeTintColor:"#161F3D",
          inactiveTintColor:"#BBBBC4",
          showLabel:false
        }
      
      }
    
      
      ),
      postModal:{
        screen:Bucketlistscreen
      }

  },
  {
    mode:"modal",
    headerMode:'none',
    // initialRouteName:"postModal"
  }
)



const AuthStack = createStackNavigator({
  Login:Loginscreen,
  Register:Registerscreen

});


const App =  createAppContainer(
  createSwitchNavigator(
    {
      Loading:Loadingscreen,
      App:AppContainer,
      Auth:AuthStack
    } ,


    {
      initialRouteName:'Loading'
    }
  )
)
export default App;