import React from react;
import {View,Text, TextInputBase, TextInputBase} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
    constructor(){
        super()
        this.state={
            username: '',
            password:'',
            isVisible: false,
            firstName: "",
            lastName: "",
            mobileNumber:"",
            address:"",
            confirmPassword:""

        }
    }
    userLogin = (username,password)=>{
        firebase.auth().signInWithEmailAndPassword(username,password).then(()=>{
            return Alert.alert("Successfully Login")
        })
        .catch((error)=>{
            var errorCode = error.code;
            var erorMessage = error.message;
            return Alert.alert(errorMessage)
        })

        userSignUp = (username,password) =>{
            firebase.auth().createUserWithEmailAndPassword(username,password).then((response)=>{
                return Alert.alert("User Added Successfully")
            })
            .catch(function(error){
                var errorCode = error.code;
                var errorMessage = error.message;
                return Alert.alert(errorMessage)
            })
        }
    }
    render(){
        return(
            <View>
           <Text style={{color:'#e8c7ea', fontSize:18, fontWeight:'bold' , marginLeft:55}}>USERNAME</Text>
           <View style={{alignItems:'center'}}>
              <TextInput 
              style={{ width: 300,
                height: 35,
                borderBottomWidth: 1.5,
                borderColor:'#ffab91',
                fontSize: 20,
                marginBottom:20,
                marginTop:5
            }} 
            keyboardType = 'email-address'
            onChangeText={(text)=>{
                this.setState({
                    username:text
                })
            }}/>
    
    </View>

      <View style={{alignItems:'center'}}>
      <TouchableOpacity
         style={[styles.button,{marginBottom:10}]}
         onPress = {()=>{this.userLogin(this.state.username, this.state.password)}}
         >
             <Text style={{color:'#e8c7ea', fontSize:18, fontWeight:'bold'}}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={{ width:"75%",
            height:50,
            justifyContent:'center',
            alignItems:'center',
            borderRadius:25,
            backgroundColor:"#ffff",
            elevation:10}}
            onPress={()=>{this.userSignUp(this.state.username, this.state.password)}}
            >
            <Text style={{color:'#e8c7ea', fontSize:18, fontWeight:'bold'}}>SIGN UP</Text>
            </TouchableOpacity>



      </View>

             </View>  
       
                 
            
        )}}
