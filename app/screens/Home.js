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

            <TouchableOpacity style={styles.logInButton}
                onPress={()=>
                    this.props.navigation.navigate('UserInputs')}
                > 
                <Text style={styles.logInButtonText}>LOG IN</Text>
                </TouchableOpacity>

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
      fontSize: 30,
      paddingLeft: 130,
      paddingTop: 40,
      
    },
    guestButton: {

        flex: 0,
        justifyContent: 'flex-end',
        marginBottom: 15,   
        backgroundColor: 'transparent',
        width:380,
        height:50,
        borderRadius: 6,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,

    },
    guestButtonText: {
        color: 'white',
        fontSize: 15,
        borderColor: '#fff'
    },
    logInButton: {

        flex: 0,
        justifyContent: 'flex-end',
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 10,
        backgroundColor: 'white',
        width:150,
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
        borderColor: '#fff'
    },
  });