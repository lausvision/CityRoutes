import React, { useEffect, useState } from "react";
//import { useDispatch } from "react-redux";
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

export default function selection({ navigation, route }) {
  const [activityList, setactivityList] = useState(null);
  //useEffect(() => setactivityList(loadActivities(route.params)));
  //console.log(activityList);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Activity selection</Text>
        </View>

        <ScrollView style={styles.scrollConatainer}>
          <View style={styles.containerButton}>
            <View style={styles.containerButton}>
              <TouchableOpacity
                style={styles.activityButton}
                onPress={() => this.props.navigation.navigate("Activity")}
              >
                <Text style={styles.activityButtonText}>ACTIVITY 1</Text>
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

            <View style={styles.containerButton}>
              <TouchableOpacity style={styles.activityButton}>
                <Text style={styles.activityButtonText}>ACTIVITY 2</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.containerButton}>
              <TouchableOpacity style={styles.activityButton}>
                <Text style={styles.activityButtonText}>ACTIVITY 3</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.containerButton}>
              <TouchableOpacity style={styles.activityButton}>
                <Text style={styles.activityButtonText}>ACTIVITY 4</Text>
              </TouchableOpacity>
            </View>
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
              onPressAction={() => navigation.navigate("Routes")}
            />
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
