import React from 'react';
import { StyleSheet, Text, View,Image ,TextInput,TouchableOpacity,ImageBackground,ScrollView} from 'react-native';

const LoginPage = ({navigation}) => {
    return ( 
        <View style={styles.container}>
            <ImageBackground style={styles.iconContainer} source={require('../../../assets/iconbg.jpg')} >
                <Image  style={{width:'100%',height:'100%'}}  source={require('../../../assets/Jgo_logo_edit.png')} />
            </ImageBackground>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>  
                    <TextInput
                    style={{ height: 40, borderColor: 'gray', borderBottomWidth:1,width:'70%',marginBottom:15, color:'white' }}
                    placeholder="Email:"
                    />
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1,width:'70%',marginBottom:15, color:'white'    }}   
                        placeholder="Password"
                    />
                   <View style={styles.submitButtonAndForgotPassword} >
                        <TouchableOpacity><Text style={styles.forgotPassword} >Forgot Password</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button}><Text style={{color:'white'}}>Submit</Text></TouchableOpacity>
                   </View>
                </View>
                <View style={styles.loginWithContainer} >
                    <Text style={{color:'white'}}>Log in with</Text>
                    <View style={styles.socialMediaButtons}>
                        <TouchableOpacity style={styles.facebookButton}><Text style={{color:'white'}}>Facebook</Text></TouchableOpacity>
                        <View style={styles.verticalLine} ></View>
                        <TouchableOpacity style={styles.googleButton}><Text style={{color:'black'}}>Google</Text></TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:"white"}} >Don't Have an Account?</Text>
                        <TouchableOpacity onPress={()=>{navigation.navigate('Register')}}  ><Text  style={{ color:'#ff8c00',textDecorationLine:'underline'}} >Sign Up</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'black'
    },
    iconContainer:{
        flex:0.43,
    },
    formContainer:{
        flex:0.57,
        backgroundColor:"#2e2e2e",
        borderTopLeftRadius:19,
        borderTopRightRadius:19
    },
    inputContainer:{
        flex:0.5,
        justifyContent:"center",
        alignItems:"center"
    },
    button:{
        justifyContent:"center",
        alignItems:"center",
        height:30,
        width:95,
        backgroundColor:'#ff8c00',
        borderRadius:100,
        
    },
    forgotPassword:{
        color:'#ff8c00',
        textDecorationLine:'underline',
    },
    submitButtonAndForgotPassword:{
        width:'80%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
    },
    loginWithContainer:{
        flex:0.5,
        alignItems:'center',
    },
    socialMediaButtons:{
        flexDirection:"row",
        marginTop:30
    },
    facebookButton:{
        justifyContent:"center",
        alignItems:"center",
        height:50,
        width:120,
        backgroundColor:'#3b5998',
        borderRadius:10,
        
    },
    googleButton:{
        justifyContent:"center",
        alignItems:"center",
        height:50,
        width:120,
        backgroundColor:'white',
        borderRadius:10,

    },
    verticalLine:{
        borderLeftWidth: 1,
        borderLeftColor: 'white',
        marginHorizontal: 10,
        height:100,
        position:'relative',
        bottom:'5%'
    }
  });
 
export default LoginPage;