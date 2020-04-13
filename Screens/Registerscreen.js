import React, { Component } from 'react';
import {View , Text , StyleSheet , TextInput , TouchableOpacity} from 'react-native';
import * as firebase from 'firebase';

export default class Registerscreen extends Component {
  state={
    name:'',
    email:'',
    password:'',
    errorMessage:null
  } 
  handelSignUp =()=>{
    firebase.auth()
    .createUserWithEmailAndPassword(this.state.email , this.state.password)
    .then(userCredentials =>{
      return userCredentials.user.updateProfile({
        displayName:this.state.name
      })
    })
    .catch(error=>this.setState({errorMessage:error.message}))

  }
 
  render() {
    return (
     <View style={Styles.container}>
         <Text style={Styles.greeting}>{`Hello .\nSignUp to get start`}</Text>

         <View style={Styles.errorMessage}>
    {this.state.errorMessage && <Text style={Styles.error}>{this.state.errorMessage}</Text>}
         </View>

        <View style={Styles.form}>



        <View>
          <Text style={Styles.inputTitle}> User Name</Text>
          <TextInput style={Styles.input} autoCapitalize="none"
          onChangeText={name=>this.setState({name})}
          value={this.state.name}></TextInput>
          </View>


          <View style={{marginTop:32}}>
          <Text style={Styles.inputTitle}>Email Address</Text>
          <TextInput style={Styles.input} autoCapitalize="none"
          onChangeText={email=>this.setState({email})}
          value={this.state.email}></TextInput>
          </View>

          <View style={{marginTop:32}}>
          <Text style={Styles.inputTitle}>Password</Text>
          <TextInput style={Styles.input} autoCapitalize="none" secureTextEntry
          onChangeText={password=>this.setState({password})}
          value={this.state.password}></TextInput>
          </View>
        
        </View>

          <TouchableOpacity style={Styles.button} onPress={this.handelSignUp}>
            <Text style={{color:'#FFF' , fontWeight:'500'}}>Sign Up</Text>
          </TouchableOpacity>
          

          <TouchableOpacity style={{alignSelf:'center' , marginTop:32}}
          onPress={()=>this.props.navigation.navigate('Login')}>
            <Text style={{color:'#414959' , fontSize:13}}>
               <Text style={{fontWeight:'500', color:'#E9446A'}}>Login</Text>
            </Text>
          </TouchableOpacity>
     </View>
    );
  }
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
    
    },
    greeting:{
      marginTop:32,
      fontSize:20,
      fontWeight:'400',
      textAlign:'center'
    },
    errorMessage:{
      height:72,
      alignItems:'center',
      justifyContent:'center',
      marginHorizontal:30
    },
    error:{
      color:'#E9446A',
      fontSize:15,
      fontWeight:'600',
      textAlign:'center'

    },
    form:{
      marginBottom:48,
      marginHorizontal:38
    },
    inputTitle:{
      color:"#8A8F9E",
      fontSize:10,
      textTransform:'uppercase'
    },
    input:{
      borderBottomColor:"#8A8F9E",
      borderBottomWidth:StyleSheet.hairlineWidth,
      height:40,
      fontSize:15,
      color:'#161F3D'
    },
    button:{
      marginHorizontal:38,
      backgroundColor:'#E9446A',
      borderRadius:4,
      height:52,
      alignItems:"center",
      justifyContent:'center'
    }

})