import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

export default class UserInputs extends React.Component {
    render(){
        return (
            <View style={styles.container}>
               
               <View style={styles.header}>
               <Text style={styles.headerText}>User Inputs</Text>
               </View>
               <ScrollView style={styles.scrollConatainer}></ScrollView>
            
            <TouchableOpacity style={styles.discoverButton}> 
                <Text style={styles.discoverButtonText}>DISCOVER</Text>
            </TouchableOpacity>
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
        padding: 10,
        lineHeight: 40,
        lineHeight: 100,

    },
    scrollConatainer:{
        flex:1,
        marginBottom: 100
    },
    discoverButton: {
        padding: 10,
        position: 'absolute',
        bottom: 100,
        backgroundColor: '#79A9E2',
        width:300,
        height:90,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,

    },
    discoverButtonText: {
        color: '#fff',
        fontSize: 24,
    },

})