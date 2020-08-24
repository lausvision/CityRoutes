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

    constructor(props){
        super(props);
        this.state = {
            locationArray: [],
            timeArray: [],
            budgetArray: [],
            mobilityArray: [],
            interestAray: [] 
        }
    }

    render(){
        return (
            <View style={styles.container}>
               
               <View style={styles.header}>
               <Text style={styles.headerText}>User inputs</Text>
               </View>

               <ScrollView style={styles.scrollConatainer}></ScrollView>

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
        padding: 10,
        lineHeight: 40,
        lineHeight: 100,

    },
    scrollConatainer:{
        flex:1,
        marginBottom: 100
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
        width:200,
        height:50,
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