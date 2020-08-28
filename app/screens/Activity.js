import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';


export default class Activity extends React.Component {


    render(){
        return (
            <View style={styles.container}>
               
               <View style={styles.header}>
               <Text style={styles.headerText}>name activity</Text>
               </View>

               <View style={styles.containerButton}>
                <TouchableOpacity style={styles.activityButton}
                 onPress={()=>
                    this.props.navigation.navigate('Activity')}> 
                <Text style={styles.activityButtonText}>view more</Text>
                </TouchableOpacity>
                </View>


                <View>
               <Text>Come into a world of fresh fruits and vegetables, meats and cheeses, restaurants and a wide variety of specialty shops and services.</Text>
               </View>

               
   
            </View>

           
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    header: {
       
    },
    headerText: {

        fontSize: 22,
        padding: 20,

    },
    containerButton: {
        flex:0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    discoverButton: {

        flex: 0,
        justifyContent: 'flex-end',
        marginBottom: 15,   
        backgroundColor: '#79A9E2',
        width:230,
        height:50,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,

    },
    activityButton: {

        flex: 0,
        justifyContent: 'flex-end',
        marginBottom: 40,   
        backgroundColor: '#79A9E2',
        width:260,
        height:35,
        borderRadius: 6,
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
    },

})