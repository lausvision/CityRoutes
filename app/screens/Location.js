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
import GradientButton from "react-native-gradient-buttons";
import Routes from "./Selection";

export default function Activity({ navigation, route }) {
  const [originPoint, setoriginPoint] = React.useState(route.params.point);
  return (
    <>
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
                latitude: originPoint.latitude,
                longitude: originPoint.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              onMarkerDragEnd={(e) => {
                setoriginPoint(e.nativeEvent.coordinate);
              }}
            >
              <Marker draggable coordinate={originPoint} />
            </MapView>
          </View>
          <View>
            <View style={styles.containerButton}>
              <GradientButton
                style={{ marginVertical: 8 }}
                text="LOCATE"
                textStyle={{ fontSize: 20 }}
                gradientBegin="#00008b"
                gradientEnd="#f5ba57"
                gradientDirection="diagonal"
                height={60}
                width={300}
                radius={15}
                impact
                impactStyle="Light"
                onPressAction={() => {
                  route.params.other(originPoint);
                  navigation.navigate("UserInputs");
                }}
              />
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
    alignItems: "center",
    justifyContent: "center",
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
    height: 340,
  },
});
