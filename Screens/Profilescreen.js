import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    FlatList
} from "react-native";
import * as firebase from 'firebase';
import {Ionicons} from '@expo/vector-icons';
import { Container, Content, Button } from 'native-base'

var { height, width } = Dimensions.get('window');

var images = [
    require('../assets/img1.jpeg'),
    require('../assets/img2.jpeg'),
    require('../assets/img3.jpeg'),
    require('../assets/img4.jpeg'),
    require('../assets/img5.jpeg'),
    require('../assets/img6.jpeg'),
    require('../assets/img7.jpeg'),
    require('../assets/img8.jpeg'),
    require('../assets/img1.jpeg'),
    require('../assets/img2.jpeg'),
    require('../assets/img3.jpeg'),
    require('../assets/img4.jpeg'),
]

class ProfileTab extends Component {

    constructor(props) {
        super(props)

        this.state = {
            activeIndex: 0,
            email:'',
            name:'',
            password:''
        }
    }


    componentDidMount() {
     const{email , displayName} = firebase.auth().currentUser;
    this.setState({email , displayName});
        console.log(width)

    

    }



  signOutUser = () =>{
    firebase.auth().signOut()
  }
    render() {
        return (
            <Container style={styles.container}>
<View style={styles.header}>

<TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
                        <Ionicons name="md-arrow-back" size={24} color="#D8D9DB"></Ionicons>
                    </TouchableOpacity>
           <Text style={styles.headerTitle}>
            Profile
           </Text>

           <Button  transparent onPress={this.signOutUser}  style={styles.logoutbtn}>
                        <Ionicons name="ios-log-out" style={{fontSize:32}}></Ionicons>
                        </Button>
         </View>

                <Content>

                    <View style={{ paddingTop: 10 }}>

                     
                        <View style={{ flexDirection: 'row' }}>

                      
                            <View
                                style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
                                <Image source={require("../assets/user.png")}
                                    style={{ width: 75, height: 75, borderRadius: 37.5 }} />

                            </View>

                        
                            <View style={{ flex: 3 }}>

                        
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-around',
                                        alignItems: 'flex-end'
                                    }}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>20</Text>
                                        <Text style={{ fontSize: 10, color: 'grey' }}>Posts</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>205</Text>
                                        <Text style={{ fontSize: 10, color: 'grey' }}>Followerss</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>167</Text>
                                        <Text style={{ fontSize: 10, color: 'grey' }}>Following</Text>
                                    </View>
                                </View>

                        
                                <View style={{ flexDirection: 'row', alignItems: 'flex-start', paddingTop: 10 }}>

                                    <View
                                        style={{ flexDirection: 'row' }}>

                               
                                        <Button bordered dark
                                            style={{ flex: 3, marginLeft: 10, marginRight:10,justifyContent: 'center', height: 30 }}>
                                                <Text>Edit Profile</Text></Button>

                                    </View>
                                </View>


                            </View>
                        </View>

                        <View style={{ paddingBottom: 10 }}>
                            <View style={{ paddingHorizontal: 10 }}>
                                    <Text style={{ fontWeight: 'bold' }}>{this.state.email.slice(0,10).toUpperCase()}</Text>
                               
                                <Text>{this.state.email}</Text>
                            </View>
                        </View>


                    </View>


                    <View >
                       


<FlatList
                horizontal={false}
                numColumns={3}
                data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'e' }, { key: 'f' }, { key: 'g' }, { key: 'h' }, { key: 'i' }, { key: 'j' }, { key: 'k' }, { key: 'l' },]}
                renderItem={({ item, index }) =>
                    <View style={[{ width: (width) / 3 }, { height: (width) / 3 }, 
                    { marginBottom: 2 }, index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }]}>
                        <Image style={{
                            flex: 1,
                            alignSelf: 'stretch',
                            width: undefined,
                            height: undefined,
                        }}
                            source={images[index]}>
                        </Image>
                    </View>
                }
            />
 
                    </View>
                </Content>
            </Container >
        );
    }
}
export default ProfileTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header:{
        padding:10,
        paddingTop:24,
        paddingBottom:16,
        backgroundColor:'#FFF',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
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
      logoutbtn:{
          backgroundColor:'white',
          

      }
  
});

