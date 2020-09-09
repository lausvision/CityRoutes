import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';


export default class Routes extends React.Component {


    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.headerText}>Time Schedule</Text>
                </View>

                <View>

                    <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.activityButton}
                        onPress={() =>
                            this.props.navigation.navigate('Activity')}>
                        <Text style={styles.activityButtonText}>ACTIVITY 1</Text>
                    </TouchableOpacity></View>

                   <View style={styles.arrowRightContainer}>
                    <TouchableOpacity activeOpacity={0.5}
                    onPress={() =>
                        this.props.navigation.navigate('Transfer')}>
                        <Image
                            source={require('./img/rightArrow.png')}
                            style={styles.ImageIconStyle}
                        />
                    </TouchableOpacity></View>
                    
                    <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.activityButton}>
                        <Text style={styles.activityButtonText}>ACTIVITY 2</Text>
                    </TouchableOpacity></View>


                    <TouchableOpacity activeOpacity={0.5}>
                        <Image
                            source={require('./img/leftArrow.png')}
                            style={styles.ImageIconStyle}
                        />
                    </TouchableOpacity>

                    <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.activityButton}>
                        <Text style={styles.activityButtonText}>ACTIVITY 3</Text>
                    </TouchableOpacity></View>

                    <View style={styles.arrowRightContainer}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image
                            source={require('./img/rightArrow.png')}
                            style={styles.ImageIconStyle}
                        />
                    </TouchableOpacity></View>

                    <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.activityButton}>
                        <Text style={styles.activityButtonText}>ACTIVITY 4</Text>
                    </TouchableOpacity></View>

                    
                </View>

                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.redoButton}
                        onPress={() =>
                            this.props.navigation.navigate('Routes')}>
    
                                <Text style={styles.redoButtonText}>REDO ROUTE</Text>
                                
                        
                    </TouchableOpacity>
                </View>


                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.discoverButton}
                        onPress={() =>
                            this.props.navigation.navigate('Routes')}>
    
                                <Text style={styles.discoverButtonText}>SAVE THE ROUTE</Text>
                                
                        
                    </TouchableOpacity>
                </View>

            </View>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {

    },
    headerText: {

        fontSize: 22,
        padding: 20,
        paddingBottom: 40,

    },
    containerButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    discoverButton: {

        flex: 0,
        justifyContent: 'flex-end',
        marginBottom: 15,
        marginTop: 15,
        backgroundColor: '#79A9E2',
        width: 230,
        height: 50,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,

    },
    activityButton: {

        flex: 0,
        justifyContent: 'flex-end',
        marginBottom: 2,
        backgroundColor: 'white',
        width: 260,
        height: 35,
        borderWidth: 2.5, 
        borderRadius: 4,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,

    },
    discoverButtonText: {
        color: '#fff',
        fontSize: 24,
    },
    activityButtonText: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    },
    arrowRightContainer: {
        flex: 0,
        alignItems: 'flex-end',
        paddingRight: 10,
        paddingLeft: 10,
    },
    ImageIconStyle: {
        margin: 0,
        height: 50,
        width: 50,
        resizeMode: 'stretch',

      },
      redoButton: {
        flex: 0,
        justifyContent: 'center',
        marginBottom: 1,
        backgroundColor: 'black',
        width: 200,
        height: 30,
        borderWidth: 2.5,
        borderRadius: 13,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
      },
      redoButtonText: {
        color: 'white',
        fontSize: 20,
      },
   

})