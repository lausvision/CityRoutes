import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Image,    
} from 'react-native';
import parisImage from './img/paris_photo.jpg';

const imageUri = Image.resolveAssetSource(parisImage).uri;



export default class Home extends React.Component {


    render(){
        return (

            <View style={styles.container}>
            <ImageBackground source={{uri: imageUri}} style={styles.image}>
              <Text style={styles.text}>City Routes</Text>
              <TouchableOpacity style={styles.guestButton}
                onPress={()=>
                    this.props.navigation.navigate('UserInputs')}
                > 
                <Text style={styles.guestButtonText}>ENTER AS GUEST</Text>
                </TouchableOpacity>
            </ImageBackground>

            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.logInButton}> 
                <Text style={styles.logInButtonText}>LOG IN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerButton}> 
                <Text style={styles.registerButtonText}>REGISTER</Text>
            </TouchableOpacity>
            </View>
            

          </View>


           
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      
    },
    text: {
      color: "white",
      fontSize: 40,
      paddingLeft: 135,
      paddingTop: 35,
      
    },
    buttonContainer: {
       flex: 0,
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center',
      },
    guestButton: {

        flex: 0,
        justifyContent: 'flex-end',  
        backgroundColor: 'transparent',
        width:380,
        height:70,
        borderRadius: 8,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,

    },
    guestButtonText: {
        color: 'white',
        fontSize: 15,
        borderColor: '#fff',
        fontWeight: 'bold',
    },
    logInButton: {

        flex: 0,
        justifyContent: 'flex-end',
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 10,
        backgroundColor: 'white',
        width:170,
        height:50,
        borderRadius: 6,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,

    },
    logInButtonText: {
        color: 'black',
        fontSize: 15,
        borderColor: '#fff',
        fontWeight: 'bold',
    },
    registerButton: {

        flex: 0,
        justifyContent: 'flex-end',
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 10,
        backgroundColor: 'black',
        width:170,
        height:50,
        borderRadius: 6,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,

    },
    registerButtonText: {
        color: 'white',
        fontSize: 15,
        borderColor: '#fff',
        fontWeight: 'bold',
    },
  });