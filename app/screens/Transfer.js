import React, { Component } from "react";
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
  Linking,
} from "react-native";

import styled from "styled-components/native";
import PropTypes from "prop-types";
import MapViewDirections from "react-native-maps-directions";
import getDirections from "react-native-google-maps-directions";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

export default function Transfer({ navigation, route }) {
  return (
    <>
      <View style={styles.container}>
        <ScrollView style={styles.scrollConatainer}>
          <View style={styles.pricebuttonContainer}>
            <TouchableOpacity style={styles.priceButton}>
              <Text style={styles.priceButtonText}>ROUTE</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.subheaderText}>From: {route.params.from} </Text>
            <Text style={styles.subheaderText}>To: {route.params.to} </Text>
            <Text style={styles.subheaderText}>
              Travel time: {Math.floor(route.params.travelTime / 60)} minutes
            </Text>
            <Text style={styles.subheaderText}>
              Travel mode: {route.params.travelMode}
            </Text>
          </View>
          <View style={styles.mapContainer}>
            <MapView
              zoomEnabled={true}
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              initialRegion={{
                latitude: route.params.originMap.latitude,
                longitude: route.params.originMap.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker coordinate={route.params.toLocation} title={route.params.to} />
              <Marker coordinate={route.params.fromLocation} title={route.params.from} />
            </MapView>
          </View>
          <View style={styles.pricebuttonContainer}>
            <TouchableOpacity style={styles.priceButton}>
              <Text style={styles.priceButtonText}>OTHER OPTIONS</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.imageContainer}>
            <Image source={require("./img/taxi.png")} style={styles.image} />
            <View style={styles.textContainer}>
              <Text>Taxi</Text>
              <Text>price from 5€ to 50€</Text>
            </View>
          </View>

          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              margin: 10,
            }}
          />

          <View style={styles.imageContainer}>
            <Image source={require("./img/uber.png")} style={styles.image} />
            <View style={styles.textContainer}>
              <Text>Uber</Text>
              <Text>price from 5€ to 50€</Text>
              <Text>Call 15199</Text>
              <Text
                style={{ color: "blue" }}
                onPress={() =>
                  Linking.openURL(
                    "https://play.google.com/store/apps/details?id=com.ubercab&hl=en"
                  )
                }
              >
                Request a ride
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  scrollConatainer: {
    flex: 1,
  },
  imageContainer: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    margin: 0,
    height: 60,
    width: 60,
    resizeMode: "stretch",
  },
  textContainer: {
    paddingLeft: 35,
  },
  pricebuttonContainer: {
    alignItems: "center",
    paddingLeft: 20,
    paddingTop: 5,
  },
  priceButton: {
    flex: 0,
    justifyContent: "center",
    marginBottom: 1,
    backgroundColor: "black",
    width: 250,
    height: 30,
    borderWidth: 2.5,
    borderRadius: 13,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
  priceButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  mapContainer: {
    padding: 10,
  },
  map: {
    height: 400,
  },
  header: {},
  headerText: {
    fontSize: 37,
    paddingLeft: 20,
    paddingBottom: 10,
    fontWeight: "100",
  },
  subheaderText: {
    fontSize: 15,
    paddingLeft: 20,
    paddingBottom: 5,
    fontWeight: "100",
  },
});
