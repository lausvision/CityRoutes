import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';


export default class Transfer extends React.Component {


    render(){
        return (
            <View style={styles.container}>
               
               
               <ScrollView style={styles.scrollConatainer}>

               <View style={styles.pricebuttonContainer}>
                        <TouchableOpacity style={styles.priceButton}>
                            <Text style={styles.priceButtonText}>OTHER OPTIONS</Text>
                        </TouchableOpacity>
                        </View>

               <View style={styles.imageContainer}>
                        <Image
                            source={require('./img/taxi.png')}
                            style={styles.image}
                        />
                        <View>
                        <Text>taxi</Text>
                        <Text>price from 5€ to 50€</Text>
                        </View>
                    </View>

                    
               <View style={styles.imageContainer}>
                        <Image
                            source={require('./img/uber.png')}
                            style={styles.image}
                        />
                        <View>
                        <Text>Uber</Text>
                        <Text>price from 5€ to 50€</Text>
                        <Text>Call 15199</Text>
                        <Text>Request a ride</Text>
                        <Text>https://play.google.com/store/apps/details?id=com.ubercab&hl=en</Text>
                        </View>
                        
                    </View>

               </ScrollView>
               
   
            </View>

           
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    scrollConatainer: {
        flex: 1,
    },
    imageContainer: {
        padding: 20,
        flexDirection: 'row',
    },
    image: {
        margin: 0,
        height: 60,
        width: 60,
        resizeMode: 'stretch',
    },
    pricebuttonContainer: {
        alignItems: 'center',
        paddingLeft: 20,
        paddingTop: 5,
    },
    priceButton: {
        flex: 0,
        justifyContent: 'center',
        marginBottom: 1,
        backgroundColor: 'black',
        width: 250,
        height: 30,
        borderWidth: 2.5, 
        borderRadius: 13,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    priceButtonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
})