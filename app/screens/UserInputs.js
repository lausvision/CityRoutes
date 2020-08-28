import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Button,
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
               
               <View>
               
               </View>

               <ScrollView style={styles.scrollConatainer}>

               <View>
               <Text style={styles.bodyText}>Location</Text>
               </View>
               <View>
               <Text style={styles.bodyText}>Time Slot</Text>
               </View>
               <View>
               <Text style={styles.bodyText}>Budget</Text>
               </View>
               <View>
               <Text style={styles.bodyText}>Mobility</Text>
               </View>
               <View>
               <Text style={styles.bodyText}>Interest</Text>
               </View>
               
               
               </ScrollView>

                <View style={styles.containerButton}>
                <TouchableOpacity style={styles.discoverButton}
                onPress={()=>
                    this.props.navigation.navigate('Routes')}
                > 
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
    bodyText: {

        fontSize: 18,
        paddingLeft:30,
        paddingBottom: 5,
        paddingTop: 10,

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