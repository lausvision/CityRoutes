import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  ScrollView,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

export default class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: { latitude: 41.387364, longitude: 2.1675071 },
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollConatainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Initial location</Text>
          </View>
          <View>
            <Text style={styles.subheaderText}>
              Add your initial location for starting the route
            </Text>
          </View>
          <View style={styles.mapContainer}>
            <MapView
              zoomEnabled={true}
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              initialRegion={{
                latitude: 41.387364,
                longitude: 2.1675071,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              onMarkerDragEnd={(e) =>
                this.setState({ x: e.nativeEvent.coordinate })
              }
            >
              <Marker draggable coordinate={this.state.x} />
            </MapView>
          </View>
          <View>
            <View style={styles.dateTimePickerContainer}>
              <Button
                title="ACCEPT"
                onPress={() => {
                  this.props.navigation.navigate("UserInputs");
                  console.log(this.state.x);
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
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
  activityButtonText: {
    color: "#000",
    fontSize: 15,
    fontWeight: "bold",
  },
  scrollConatainer: {
    flex: 1,
  },
  mapContainer: {
    padding: 10,
  },
  map: {
    height: 500,
  },
});
