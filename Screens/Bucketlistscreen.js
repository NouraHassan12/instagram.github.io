import React, { useState } from 'react';
import {View,Text,StyleSheet , FlatList ,
 TouchableOpacity , TextInput} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Planneditem from './Planneditem';
import Addplace from './Addplace';


export default function Bucketlistscreen () { 
    const [ wishList , setwishList] = useState([
        {place:'Dahab' , key:'1'},
        {place:'Asia' , key:'2'},
        {place:'Aswan' , key:'3'},
        {place:'Cairo' , key:'4'},
        {place:'mexico' , key:'5'}
    ]);

    const pressHandler =(key)=>{
        setwishList((prevList)=>{
            return prevList.filter(place=>place.key != key)
        })
    }


    const submitHandler =(place)=>{
        setwishList((prevList)=>{
            return[
                {place:place , key:Math.random().toString()},
                ...prevList
            ]
        })
    }
        return (
            <View style={Styles.container}>
                 <View style={Styles.header}>
           <Text style={Styles.headerTitle}>
             BucketList
           </Text>
         </View>

          <View style={Styles.content}>
              <Addplace submitHandler={submitHandler} />
              <View style={Styles.List}>
                  <FlatList
                    
                  data={wishList} 
                  renderItem={({item}) =>(
                  <Planneditem item={item} pressHandler={pressHandler}/>
                  )}/>

              </View>
          </View>

            </View>
        )
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
    content:{
        padding:40,
        flex:1
    },
    List:{
        marginTop:20,
        flex:1
    }
  
})