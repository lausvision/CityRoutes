import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRoutes } from "../actions/routes";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import GradientButton from "react-native-gradient-buttons";

export default function Routes({ navigation, route }) {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities.activities);
  useEffect(() => {
    dispatch(
      loadRoutes({
        activities: activities,
        originMap: route.params.originMap,
        travelMode: route.params.travelMode,
        userTimeHours: route.params.userTimeHours,
        userTimeMinutes: route.params.userTimeMinutes,
      })
    );
  }, []);
  const routes = useSelector((state) => state.routes.routes);
  const load = useSelector((state) => state.routes.loading);
  const error = useSelector((state) => state.routes.error);

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
            <Text style={styles.headerText}>Time Schedule</Text>
          </View>

          <ScrollView style={styles.scrollConatainer}>
            <View style={styles.containerButton}>
              <View style={styles.containerButton}>
                <TouchableOpacity style={styles.activityButton}>
                  <Text style={styles.activityButtonText}>Origin Point</Text>
                  <Text style={styles.subheaderText}>
                    Start: {routes[1][0].toString()} h
                  </Text>
                </TouchableOpacity>
              </View>
              {routes[0].map((obj, index) => {
                if (index % 2 == 0) {
                  return (
                    <>
                      <View style={styles.arrowRightContainer}>
                        <TouchableOpacity
                          activeOpacity={0.5}
                          onPress={() =>
                            navigation.navigate("Transfer", {
                              originMap: route.params.originMap,
                              travelMode: route.params.travelMode,
                              travelTime: routes[3][index].duration.value,
                              to: obj.name,
                              from:
                                index == 0
                                  ? "Origin Point"
                                  : routes[0][index - 1].name,
                              toLocation: {
                                latitude: obj.latitude,
                                longitude: obj.longitude,
                              },
                              fromLocation:
                                index == 0
                                  ? route.params.originMap
                                  : {
                                      latitude: routes[0][index - 1].latitude,
                                      longitude: routes[0][index - 1].longitude,
                                    },
                            })
                          }
                        >
                          <Image
                            source={require("./img/rightArrow.png")}
                            style={styles.ImageIconStyle}
                          />
                        </TouchableOpacity>
                      </View>
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
                              origin: route.params.originMap,
                            })
                          }
                        >
                          <Text style={styles.activityButtonText}>
                            {obj.name.toString()}
                          </Text>
                          <Text style={styles.subheaderText}>
                            Start: {routes[1][(index + 1) * 2 - 1].toString()} h
                            / Finish: {routes[1][(index + 1) * 2].toString()} h
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </>
                  );
                } else {
                  return (
                    <>
                      <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() =>
                          navigation.navigate("Transfer", {
                            originMap: route.params.originMap,
                            travelMode: route.params.travelMode,
                            travelTime: routes[3][index].duration.value,
                            to: obj.name,
                            from:
                              index == 0
                                ? "Origin Point"
                                : routes[0][index - 1].name,
                            toLocation: {
                              latitude: obj.latitude,
                              longitude: obj.longitude,
                            },
                            fromLocation:
                              index == 0
                                ? route.params.originMap
                                : {
                                    latitude: routes[0][index - 1].latitude,
                                    longitude: routes[0][index - 1].longitude,
                                  },
                          })
                        }
                      >
                        <Image
                          source={require("./img/leftArrow.png")}
                          style={styles.ImageIconStyle}
                        />
                      </TouchableOpacity>
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
                              origin: route.params.originMap,
                            })
                          }
                        >
                          <Text style={styles.activityButtonText}>
                            {obj.name.toString()}
                          </Text>
                          <Text style={styles.subheaderText}>
                            Start: {routes[1][(index + 1) * 2 - 1].toString()} h
                            / Finish: {routes[1][(index + 1) * 2].toString()} h
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </>
                  );
                }
              })}
            </View>
            <View style={styles.containerButton}>
              <GradientButton
                style={{ marginVertical: 40 }}
                text="REDO ROUTE"
                textStyle={{ fontSize: 20 }}
                gradientBegin="#00008b"
                gradientEnd="#f5ba57"
                gradientDirection="diagonal"
                height={60}
                width={300}
                radius={15}
                impact
                impactStyle="Light"
                onPressAction={() => navigation.navigate("Selection")}
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
    fontSize: 12,
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
    width: 280,
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
