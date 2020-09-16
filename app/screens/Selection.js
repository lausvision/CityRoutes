import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadActivities, loadNewActivities } from "../actions/activities";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  Alert,
  ScrollView,
} from "react-native";
import GradientButton from "react-native-gradient-buttons";

const getListFromApiAsync = async () => {
  try {
    let response = await fetch("http://192.168.148.17:8080/api/places");
    let json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error);
  }
};

export default function selection({ navigation, route }) {
  //getListFromApiAsync();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadActivities(route.params));
  }, []);
  const activities = useSelector((state) => state.activities.activities);
  const load = useSelector((state) => state.activities.loading);
  const error = useSelector((state) => state.activities.error);
  if (load) {
    return (
      <>
        <View style={styles.header}>
          <Text style={styles.headerText}>LOADING...</Text>
        </View>
      </>
    );
  } else {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Activity selection</Text>
          </View>

          <ScrollView style={styles.scrollConatainer}>
            <View style={styles.containerButton}>
              {activities.map((obj, index) => {
                return (
                  <>
                    <View style={styles.containerButton}>
                      <TouchableOpacity
                        style={styles.activityButton}
                        onPress={() =>
                          navigation.navigate("Activity", {
                            name: obj.name,
                            price: obj.price,
                            latitude: obj.latitude,
                            longitude: obj.longitude,
                            rating: obj.rating,
                            reviews: obj.reviews,
                            origin: route.params.originMap
                          })
                        }
                      >
                        <Text style={styles.activityButtonText}>
                          {obj.name.toString()}
                        </Text>
                      </TouchableOpacity>
                    </View>

                    <View>
                      <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => Alert.alert("Delete this activity?")}
                      >
                        <Image
                          source={require("./img/trash.png")}
                          style={styles.ImageIconStyle}
                        />
                      </TouchableOpacity>
                    </View>
                  </>
                );
              })}
            </View>

            <View style={styles.containerButton}>
              <GradientButton
                style={{ marginVertical: 8 }}
                text="GENERATE ROUTE"
                textStyle={{ fontSize: 20 }}
                gradientBegin="#00008b"
                gradientEnd="#f5ba57"
                gradientDirection="diagonal"
                height={60}
                width={300}
                radius={15}
                impact
                impactStyle="Light"
                onPressAction={() => navigation.navigate("Routes",{
                  originMap: route.params.originMap,
                  travelMode: route.params.travelMode,
                  userTimeHours: route.params.userTimeHours,
                  userTimeMinutes:route.params.userTimeMinutes,
                })}
              />
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {},
  headerText: {
    fontSize: 22,
    padding: 20,
    paddingBottom: 40,
  },
  subheaderText: {
    fontSize: 15,
    paddingLeft: 20,
    paddingBottom: 5,
    fontWeight: "100",
  },
  containerButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  infoButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    borderRadius: 20,
  },
  discoverButton: {
    flex: 0,
    justifyContent: "flex-end",
    marginBottom: 15,
    marginTop: 15,
    backgroundColor: "#79A9E2",
    width: 230,
    height: 50,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
  activityButton: {
    flex: 0,
    justifyContent: "flex-end",
    marginBottom: 2,
    backgroundColor: "white",
    width: 260,
    height: 75,
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
    fontSize: 20,
    fontWeight: "bold",
  },
  arrowRightContainer: {
    flex: 0,
    alignItems: "flex-end",
    paddingRight: 10,
    paddingLeft: 10,
  },
  ImageIconStyle: {
    margin: 0,
    height: 22,
    width: 20,
    resizeMode: "stretch",
  },
});
