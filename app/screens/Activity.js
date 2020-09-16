import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import Stars from "react-native-stars";

export default function Activity({ navigation, route }) {
  return (
    <>
      <View style={styles.container}>
        <ScrollView style={styles.scrollConatainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require("./img/exemple_activity.jpg")}
              style={styles.image}
            />
          </View>

          <View style={styles.header}>
            <Text style={styles.headerText}>{route.params.name}</Text>
          </View>

          <View>
            <Text style={styles.subheaderText}>
              Activity Description. Reviews/Rating/Price/Location are real. Add
              more info with google API.
            </Text>
          </View>

          <View style={styles.containerButton}>
            <TouchableOpacity
              style={styles.moreinfoButton}
              onPress={() => this.props.navigation.navigate("Activity")}
            >
              <Text style={styles.activityButtonText}>MORE INFO</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>Price</Text>
            <View style={styles.pricebuttonContainer}>
              <TouchableOpacity style={styles.priceButton}>
                <Text style={styles.priceButtonText}>{route.params.price}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>Location</Text>
          </View>

          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: route.params.origin.latitude,
                longitude: route.params.origin.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                coordinate={{
                  latitude: route.params.latitude,
                  longitude: route.params.longitude,
                }}
                title="Marker"
              />
            </MapView>
          </View>

          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              margin: 10,
            }}
          />

          <View style={{ alignItems: "center" }}>
            <Text
              style={{ paddingBottom: 10, fontWeight: "bold", color: "orange" }}
            >
              {route.params.reviews} Reviews
            </Text>
            <Stars
              display={route.params.rating}
              spacing={8}
              count={5}
              starSize={40}
              style={{ paddingBottom: 10 }}
              fullStar={require("./img/starFilled.png")}
              emptyStar={require("./img/starEmpty.png")}
              halfStar={require("./img/starHalf.png")}
            />
            <Text style={{ paddingTop: 10, fontWeight: "bold", fontSize: 25 }}>
              {route.params.rating}/5
            </Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  containerButton: {
    flex: 0,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 35,
  },
  moreinfoButton: {
    flex: 0,
    justifyContent: "flex-end",
    marginBottom: 40,
    backgroundColor: "white",
    width: 95,
    height: 30,
    borderWidth: 2.5,
    borderRadius: 4,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
  discoverButtonText: {
    color: "#fff",
    fontSize: 24,
  },
  activityButtonText: {
    color: "#000",
    fontSize: 15,
    fontWeight: "bold",
  },
  imageContainer: {},
  image: {
    margin: 0,
    height: 250,
    width: 500,
    resizeMode: "stretch",
  },
  scrollConatainer: {
    flex: 1,
  },
  priceContainer: {
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 20,
    flexDirection: "column",
  },
  pricebuttonContainer: {
    paddingLeft: 20,
    paddingTop: 5,
  },
  priceButton: {
    flex: 0,
    justifyContent: "flex-end",
    marginBottom: 40,
    backgroundColor: "black",
    width: 95,
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
    height: 200,
  },
});
