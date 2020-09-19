import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import parisImage from "./img/paris_photo.jpg";
import { loadCountries } from "../actions/countries";
import { loadCities } from "../actions/cities";

import { useDispatch } from "react-redux";

const imageUri = Image.resolveAssetSource(parisImage).uri;

const loadMethods = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCountries());
    dispatch(loadCities());
  }, []);
};

const Home = ({ navigation }) => {
  loadMethods();

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: imageUri }} style={styles.image}>
        <Text style={styles.text}>City Routes</Text>
        <View style={styles.containerGuest}>
          <TouchableOpacity
            style={styles.guestButton}
            onPress={() => navigation.navigate("UserInputs")}
          >
            <Text style={styles.guestButtonText}>ENTER AS GUEST</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.logInButton}>
          <Text style={styles.logInButtonText}>LOG IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  text: {
    color: "white",
    fontSize: 40,
    paddingLeft: 140,
    paddingTop: 35,
  },
  containerGuest: {
    position: "absolute",
    bottom: 0,
    paddingBottom: 20,
    padding: 15,
  },
  guestButton: {
    flex: 0,
    justifyContent: "flex-end",
    backgroundColor: "transparent",
    width: 360,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  guestButtonText: {
    color: "white",
    fontSize: 15,
    borderColor: "#fff",
    fontWeight: "bold",
  },
  buttonContainer: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logInButton: {
    flex: 0,
    justifyContent: "flex-end",
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: "white",
    width: 170,
    height: 50,
    borderWidth: 2.5,
    borderRadius: 4,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
  logInButtonText: {
    color: "black",
    fontSize: 15,
    borderColor: "#fff",
    fontWeight: "bold",
  },
  registerButton: {
    flex: 0,
    justifyContent: "flex-end",
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: "black",
    width: 170,
    height: 50,
    borderRadius: 6,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
  registerButtonText: {
    color: "white",
    fontSize: 15,
    borderColor: "#fff",
    fontWeight: "bold",
  },
});

export default Home;
