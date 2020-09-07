import React, { Component } from 'react';
import {
    StyleSheet,
    Button,
    Text,
    View,
    TextInput,
    ActivityIndicator,
    ImageBackground,
    TouchableOpacity,
    Image,
    ScrollView,
    Linking
} from 'react-native';

import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import getDirections from 'react-native-google-maps-directions';


export default class Transfer extends React.Component {

    constructor() {
        super();
    }


    render() {
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
                        <View style={styles.textContainer}>
                            <Text>taxi</Text>
                            <Text>price from 5€ to 50€</Text>
                        </View>
                    </View>

                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            margin: 10
                        }}
                    />


                    <View style={styles.imageContainer}>
                        <Image
                            source={require('./img/uber.png')}
                            style={styles.image}
                        />
                        <View style={styles.textContainer}>

                            <Text>Uber</Text>
                            <Text>price from 5€ to 50€</Text>
                            <Text>Call 15199</Text>
                            <Text style={{ color: 'blue' }}
                                onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.ubercab&hl=en')}
                            >Request a ride</Text>

                        </View>

                    </View>

                </ScrollView>


            </View>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollConatainer: {
        flex: 1,
    },
    imageContainer: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        margin: 0,
        height: 60,
        width: 60,
        resizeMode: 'stretch',
    },
    textContainer: {
        paddingLeft: 35
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