import React, { Component } from 'react';
import {View , Text , StyleSheet , FlatList , LayoutAnimation , Image} from 'react-native';
import * as firebase from 'firebase';
import {Ionicons} from '@expo/vector-icons';
import moment from 'moment';

Posts = [
  {
  id:'1',
  name:'nour hassan',
  text:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningfu',
  timestamp:13234658458,
  avatar:require("../assets/user.png"),
  Image:require('../assets/img1.jpeg')
  
} ,

{
  id:'2',
  name:'user 2',
  text:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningfu',
  timestamp:13234658458,
  avatar:require("../assets/user.png"),
  Image:require('../assets/img2.jpeg')
  
} ,

{
  id:'3',
  name:'user 3',
  text:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningfu',
  timestamp:13234658458,
  avatar:require("../assets/user.png"),
  Image:require('../assets/img3.jpeg')
  
},
{
  id:'4',
  name:'user 4',
  text:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningfu',
  timestamp:13234658458,
  avatar:require("../assets/user.png"),
  Image:require('../assets/img4.jpeg')
  
},
{
  id:'5',
  name:'user 5',
  text:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningfu',
  timestamp:13234658458,
  avatar:require("../assets/user.png"),
  Image:require('../assets/img5.jpeg')
  
},
{
  id:'6',
  name:'user 6',
  text:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningfu',
  timestamp:13234658458,
  avatar:require("../assets/user.png"),
  Image:require('../assets/img8.jpeg')
  
}




];
export default class Homescreen extends Component {

  
  state={
    email:'',
    displayName:''
  }

  renderPost = Post =>{
    return(
      <View style={Styles.feedItem}>
        <Image source={Post.avatar} style={Styles.avatar}/>

        <View style={{flex:1}}>
          <View style={{flexDirection:'row' , justifyContent:'space-between' , alignItems:"center"}}>
            <View>
              <Text style={Styles.name}>{Post.name}</Text>
    <Text style={Styles.timestamp}>{moment(Post.timestamp).fromNow()}</Text>
            </View>

            <Ionicons name="ios-more" size={24} color="#73788B" />
          </View>
              <Text style={Styles.post}>{Post.text}</Text>
              <Image source={Post.Image} style={Styles.postImage} resizeMode="cover" />

              <View style={{flexDirection:'row'}}>
                <Ionicons name="ios-heart-empty" size={24} color="#737888" style={{marginRight:16}} />
                <Ionicons name="ios-chatboxes" size={24} color="#737888"  />
              </View>
        </View>
      </View>
    )
  }

  render() {
 LayoutAnimation.easeInEaseOut()

    return (
     
     <View style={Styles.container}>

         <View style={Styles.header}>
           <Text style={Styles.headerTitle}>
             Feed
           </Text>
         </View>


         <FlatList
         style={Styles.feed}
         data={Posts}
         renderItem={({item})=> this.renderPost(item)}
         keyExtractor={item =>item.id}
         showsVerticalScrollIndicator={false}
         ></FlatList>
     </View>
   
    );
  }
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
      
    },
    header:{
      paddingTop:44,
      paddingBottom:16,
      backgroundColor:'#FFF',
      alignItems:'center',
      justifyContent:'center',
      borderBottomWidth:1,
      borderBottomColor:'#EBECF4',
      shadowOffset:{height:5},
      shadowRadius:15,
      shadowOpacity:0.2,
      zIndex:10
    },
    headerTitle:{
      fontSize:20,
      fontWeight:"500",

    },

    feed:{
      marginHorizontal:16
    },
    feedItem:{
      backgroundColor:'#FFF',
      borderRadius:5,
      padding:8,
      flexDirection:"row",
      marginVertical:8,
    },
    avatar:{
      width:36,
      height:36,
      borderRadius:18,
      marginRight:16
    },
    name:{
      fontSize:15,
      fontWeight:'500',
      color:'#454D65',
    },
    timestamp:{
      fontSize:11,
      color:'#C4C6CE',
      marginTop:4
    },
    post:{
      marginTop:16,
      fontSize:14,
      color:"#838899"
    },
    postImage:{
      width:undefined,
      height:150,
      borderRadius:5,
      marginVertical:16
    }




})