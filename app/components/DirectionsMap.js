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

let Container = styled(View)`
	width: 100%;
	height: 100%;
	background-color: white;
`;

let Map = styled(MapView)`
	width: 100%;
	height: 100%;
`;

const origin = { latitude: 42.2678176, longitude: -71.000124 };
const destination = { latitude: 42.2929175, longitude: -71.0548235 };
const GOOGLE_MAPS_APIKEY = 'AIzaSyCCExFZgGsyosGTJ5e_GjshKczB-7OgnEc';


export default class Transfer extends React.Component {


    constructor() {
        super();
    }

    handleGetDirections = () => {
        const data = {
            destination,
            params: [
                {
                    key: "dirflg",
                    value: "d"
                }
            ]
        }

        getDirections(data)
    }

    pressed(e) {
        console.log('pressed');

    }
    render() {
        return (
            <View style={styles.container}>


                <ScrollView style={styles.scrollConatainer}>


                    <View>
                        <Map
                            initialRegion={{
                                latitude: 42.2678176,
                                longitude: -71.000124,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        >
                            <MapView.Marker
                                coordinate={destination}
                            >
                                <MapView.Callout onPress={() => {
                                    console.log('Press to Get Direction');
                                    this.handleGetDirections();
                                }}>
                                    <Text>Press to Get Direction</Text>
                                </MapView.Callout>
                            </MapView.Marker>
                            <MapViewDirections
                                origin={origin}
                                destination={destination}
                                apikey={GOOGLE_MAPS_APIKEY}
                            />

                        </Map>
                    </View>

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