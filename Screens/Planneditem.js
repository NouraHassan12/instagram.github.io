import React, { useState } from 'react';
import {View,Text,StyleSheet , 
 TouchableOpacity , TextInput} from 'react-native';

 import {Ionicons} from '@expo/vector-icons';
export default function Planneditem ({item , pressHandler}) {
    return(
        
<TouchableOpacity onPress={()=>pressHandler(item.key)}>
<View style={Styles.item}>
<Text >{item.place}</Text>
    <Ionicons name="ios-trash" size={24} color="#737888"  />
</View>
   
</TouchableOpacity>
    )
 }

 

 const Styles = StyleSheet.create({
     item:{
         padding:16,
         marginTop:16,
         borderColor:"#bbb",
         borderWidth:1,
         borderStyle:'dashed',
         borderRadius:10,
         flexDirection:'row',
        justifyContent:'space-between',
     }

 })