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

    }

})