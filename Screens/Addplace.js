import React, { useState } from 'react';
import {View,Text,StyleSheet , 
 TouchableOpacity , TextInput, Button} from 'react-native';
 import {Ionicons} from '@expo/vector-icons';


export default function Addplace ({submitHandler}) {

    const [ place , setplace ] = useState('');

    const changeHandler =(val)=>{
        setplace(val)
    }
    return(
        <View style={{flexDirection:'row' , justifyContent:'space-between'}}>
            <TextInput 
            style={Styles.input}
            placeholder="Enter your vaforite Place"
            onChangeText={changeHandler}/>
 
                   <TouchableOpacity 
                   onPress={()=>submitHandler(place)}>
                   <Ionicons  style={Styles.add} name="ios-add" size={24} color="#737888"  />
                 
                    </TouchableOpacity>
        </View>
        
    )
}
const Styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:10,
        textAlign:'center',
      
    //    borderStyle:'solid',
    //    borderColor:"#bbb",
    //    borderRadius:3,
    //    borderWidth:1,
    //    height:45
      

    },
    add:{
        padding:10,
        // marginTop:16,
        borderColor:"#bbb",
        borderWidth:1,
        borderStyle:'solid',
        borderRadius:3
    }
})