import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';


export default class Routes extends React.Component {


    render(){
        return (
            <View style={styles.container}>
               
               <View style={styles.header}>
               <Text style={styles.headerText}>Routes</Text>
               </View>

   

                <View style={styles.containerButton}>
                <TouchableOpacity style={styles.discoverButton}> 
                <Text style={styles.discoverButtonText}>DISCOVER</Text>
                </TouchableOpacity>
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

        fontSize: 36,
        padding: 25,
        lineHeight: 40,
        lineHeight: 100,

    },

})