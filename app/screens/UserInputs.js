import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import { CheckBox, Card, CardItem } from "native-base";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";
import Slider from "@react-native-community/slider";
import GradientButton from "react-native-gradient-buttons";

export default class UserInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null,
      city: null,
      timeArray: [],
      budgetArray: [],
      mobilityArray: [],
      interestArray: [],
      walk: false,
      bike: false,
      publicTransport: false,
      privateTransport: false,
      sightseeing: false,
      museums: false,
      barsandMusic: false,
      nightlife: false,
      isVisible: false,
      chosenDate: "",
      chosenHour: "",
      chosenMinute: "",
      isVisible2: false,
      chosenDate2: "",
      chosenHour2: "",
      chosenMinute2: "",
      sliderValue: 15,
      originPoint: { latitude: 41.387364, longitude: 2.1675071 },
    };
  }

  handlePicker = (datetime) => {
    this.setState({
      isVisible: false,
      chosenDate: moment(datetime).format("MMMM, Do YYYY HH:mm"),
      chosenHour: moment(datetime).format("HH"),
      chosenMinute: moment(datetime).format("mm"),
    });
  };

  hidePicker = () => {
    this.setState({
      isVisible: false,
    });
  };

  showPicker = () => {
    this.setState({ isVisible: true });
  };

  handlePicker2 = (datetime) => {
    this.setState({
      isVisible2: false,
      chosenDate2: moment(datetime).format("MMMM, Do YYYY HH:mm"),
      chosenHour2: moment(datetime).format("HH"),
      chosenMinute2: moment(datetime).format("mm"),
    });
  };

  hidePicker2 = () => {
    this.setState({
      isVisible2: false,
    });
  };

  showPicker2 = () => {
    this.setState({ isVisible2: true });
  };

  originPointonChange = (value) => {
    this.setState({ originPoint: value });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollConatainer}>
          {/*--------------------------------- Countries dropdown ---------------------------------*/}
          <View style={styles.inputContainer}>
            <Text style={styles.bodyText}>Country</Text>
            <DropDownPicker
              style={styles.inputElement}
              // TODO: Obtain countries from the server.
              // OPTIONAL: Show only countries with places.¡
              itemStyle={styles.dropDownItem}
              items={[
                { label: "United Kingdom", value: "uk" },
                { label: "France", value: "france" },
                { label: "Spain", value: "spain" },
                { label: "United States", value: "us" },
                { label: "Germany", value: "germany" },
                { label: "Portugal", value: "portugal" },
                { label: "Italy", value: "italy" },
              ]}
              defaultValue={this.state.country}
              placeholder="Select a country"
              textStyle={{
                fontSize: 18,
              }}
              onChangeItem={(item) =>
                this.setState({
                  country: item.value,
                })
              }
              // Searchbar inside the dropdown
              searchable={true}
              searchablePlaceholder="Search..."
              searchablePlaceholderTextColor="gray"
              searchableStyle={{}}
              searchableError={() => <Text>Not Found</Text>}
            />
          </View>

          {/*--------------------------------- Cities dropdown ---------------------------------*/}
          <View style={styles.inputContainer}>
            <Text style={styles.bodyText}>City</Text>
            <DropDownPicker
              style={styles.inputElement}
              // TODO: Obtain cities from the server.
              // OPTIONAL: Show only cities with places.

              itemStyle={styles.dropDownItem}
              items={[
                { label: "Barcelona", value: "barcelona" },
                { label: "Madrid", value: "madrid" },
                { label: "London", value: "london" },
                { label: "Lisboa", value: "lisboa" },
                { label: "Berlin", value: "berlin" },
                { label: "Roma", value: "roma" },
                { label: "Verona", value: "verona" },
                { label: "Stuttgart", value: "stuttgart" },
                { label: "Lyon", value: "lyon" },
                { label: "Paris", value: "paris" },
                { label: "Porto", value: "porto" },
                { label: "Venecia", value: "venecia" },
                { label: "Pisa", value: "pisa" },
              ]}
              defaultValue={this.state.city}
              placeholder="Select a city"
              textStyle={{
                fontSize: 18,
              }}
              onChangeItem={(item) =>
                this.setState({
                  city: item.value,
                })
              }
              // Searchbar inside the dropdown
              searchable={true}
              searchablePlaceholder="Search..."
              searchablePlaceholderTextColor="gray"
              searchableStyle={{}}
              searchableError={() => <Text>Not Found</Text>}
            />
          </View>

          {/*--------------------------------- Location selector ---------------------------------*/}
          <View>
            <Text style={styles.bodyText}>Location</Text>
            <View style={styles.dateTimePickerContainer}>
              <GradientButton
                style={{ marginVertical: 8 }}
                text="PICK START POINT"
                textStyle={{ fontSize: 13 }}
                gradientBegin="#00008b"
                gradientEnd="#00008b"
                gradientDirection="diagonal"
                height={32}
                width={175}
                radius={4}
                impact
                impactStyle="Light"
                onPressAction={() =>
                  this.props.navigation.navigate("Location", {
                    point: this.state.originPoint,
                    other: this.originPointonChange,
                  })
                }
              />
              <Text>
                latitude:{" "}
                {Math.round(this.state.originPoint.latitude * 1000) / 1000}{" "}
                longitude:
                {Math.round(this.state.originPoint.longitude * 1000) / 1000}
              </Text>
            </View>
          </View>

          {/*--------------------------------- Time selector ---------------------------------*/}
          <View>
            <Text style={styles.bodyText}>Time Slot</Text>
            <View style={styles.dateTimePickerContainer}>
              <GradientButton
                style={{ marginVertical: 8 }}
                text="START"
                textStyle={{ fontSize: 15 }}
                gradientBegin="green"
                gradientEnd="#7cfc00"
                gradientDirection="diagonal"
                height={35}
                width={175}
                radius={4}
                impact
                impactStyle="Light"
                onPressAction={this.showPicker}
              />
              <DateTimePicker
                isVisible={this.state.isVisible}
                onConfirm={this.handlePicker}
                onCancel={this.hidePicker}
                mode={"datetime"}
                is24Hour={true}
              ></DateTimePicker>
              <Text>{this.state.chosenDate}</Text>

              <GradientButton
                style={{ marginVertical: 8 }}
                text="END"
                textStyle={{ fontSize: 15 }}
                gradientBegin="red"
                gradientEnd="#800000"
                gradientDirection="diagonal"
                height={35}
                width={175}
                radius={4}
                impact
                impactStyle="Light"
                onPressAction={this.showPicker2}
              />
              <DateTimePicker
                isVisible={this.state.isVisible2}
                onConfirm={this.handlePicker2}
                onCancel={this.hidePicker2}
                mode={"time"}
                is24Hour={true}
              ></DateTimePicker>
              <Text>{this.state.chosenDate2}</Text>
            </View>
          </View>

          {/*--------------------------------- Budget selector ---------------------------------*/}
          <View>
            <Text style={styles.bodyText}>Budget</Text>
            <Text style={{ paddingLeft: 30 }}>
              Max price: {this.state.sliderValue} €
            </Text>
            <Slider
              maximumValue={300}
              minimumValue={0}
              step={1}
              minimumTrackTintColor="orange"
              maximumTrackTintColor="grey"
              thumbTintColor="#00008b"
              value={this.state.sliderValue}
              onValueChange={(sliderValue) => this.setState({ sliderValue })}
              style={{ width: 375, height: 50 }}
            ></Slider>
          </View>

          {/*--------------------------------- Mobility selector ---------------------------------*/}
          <View style={{ flexDirection: "row", paddingBottom: 10 }}>
            <View>
              <Text style={styles.leftTitle}>Mobility</Text>
            </View>

            <View style={{ paddingTop: 18 }}>
              <View style={{ paddingLeft: 30 }}>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    checked={this.state.walk}
                    onPress={() =>
                      this.setState({
                        walk: !this.state.walk,
                      })
                    }
                    style={styles.checkboxInput}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checkedColor="red"
                    color="#00008b"
                  ></CheckBox>
                  <Text>Walk</Text>
                </View>

                <View style={styles.checkboxContainer}>
                  <CheckBox
                    checked={this.state.bike}
                    onPress={() =>
                      this.setState({
                        bike: !this.state.bike,
                      })
                    }
                    style={styles.checkboxInput}
                    color="#00008b"
                  ></CheckBox>
                  <Text>Bike</Text>
                </View>

                <View style={styles.checkboxContainer}>
                  <CheckBox
                    checked={this.state.publicTransport}
                    onPress={() =>
                      this.setState({
                        publicTransport: !this.state.publicTransport,
                      })
                    }
                    style={styles.checkboxInput}
                    color="#00008b"
                  ></CheckBox>
                  <Text>Public Transport</Text>
                </View>

                <View style={styles.checkboxContainer}>
                  <CheckBox
                    checked={this.state.privateTransport}
                    onPress={() =>
                      this.setState({
                        privateTransport: !this.state.privateTransport,
                      })
                    }
                    style={styles.checkboxInput}
                    color="#00008b"
                  ></CheckBox>
                  <Text>Private transport</Text>
                </View>
              </View>
            </View>
          </View>

          {/*--------------------------------- Interests selector ---------------------------------*/}
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.leftTitle}>Interest</Text>
            </View>

            <View style={{ paddingTop: 18 }}>
              <View style={{ paddingLeft: 30 }}>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    checked={this.state.sightseeing}
                    onPress={() => {
                      this.setState({
                        sightseeing: !this.state.sightseeing,
                      });
                    }}
                    style={styles.checkboxInput}
                    color="#00008b"
                  ></CheckBox>
                  <Text>Sightseeing</Text>
                </View>

                <View style={styles.checkboxContainer}>
                  <CheckBox
                    checked={this.state.museums}
                    onPress={() =>
                      this.setState({
                        museums: !this.state.museums,
                      })
                    }
                    style={styles.checkboxInput}
                    color="#00008b"
                  ></CheckBox>
                  <Text>Museums</Text>
                </View>

                <View style={styles.checkboxContainer}>
                  <CheckBox
                    checked={this.state.barsandMusic}
                    onPress={() =>
                      this.setState({
                        barsandMusic: !this.state.barsandMusic,
                      })
                    }
                    style={styles.checkboxInput}
                    color="#00008b"
                  ></CheckBox>
                  <Text>Bars and Music</Text>
                </View>

                <View style={styles.checkboxContainer}>
                  <CheckBox
                    checked={this.state.nightlife}
                    onPress={() =>
                      this.setState({
                        nightlife: !this.state.nightlife,
                      })
                    }
                    style={styles.checkboxInput}
                    color="#00008b"
                  ></CheckBox>
                  <Text>Nightlife and Party</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        {/*--------------------------------- Discover button ---------------------------------*/}
        <View style={styles.containerButton}>
          <GradientButton
            style={{ marginVertical: 8 }}
            text="DISCOVER"
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
              let mobility = [];
              this.state.bike ? mobility.push("bicycling") : null;
              this.state.walk ? mobility.push("walking") : null;
              this.state.privateTransport ? mobility.push("driving") : null;
              this.state.publicTransport ? mobility.push("transit") : null;
              this.setState({
                mobilityArray: mobility,
              });
              let interest = [];
              this.state.sightseeing ? interest.push(5) : null;
              this.state.museums ? interest.push(0) : null;
              this.state.barsandMusic ? interest.push(2) : null;
              this.state.nightlife ? interest.push(3) : null;
              this.setState(
                {
                  interestArray: interest,
                },
                () => {
                  console.log(interest);
                  console.log(this.state);
                }
              );
              this.props.navigation.navigate("Selection");
            }}
          />
        </View>
      </View>
    );
  }
}

{
  /*--------------------------------- Stylesheet ---------------------------------*/
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingTop: 10,
    paddingRight: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputText: {
    flex: 1,
    backgroundColor: "powderblue",
  },
  dropDownItem: {
    zIndex: 99,
    paddingLeft: 30,
    paddingBottom: 5,
    paddingTop: 10,
    justifyContent: "flex-start",
  },
  inputElement: {
    flex: 2,
    width: 280,
  },
  bodyText: {
    fontSize: 18,
    paddingLeft: 30,
    paddingBottom: 5,
    paddingTop: 10,
  },
  scrollConatainer: {
    flex: 1,
  },
  containerButton: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  discoverButton: {
    flex: 0,
    justifyContent: "flex-end",
    marginBottom: 15,
    backgroundColor: "#79A9E2",
    width: 200,
    height: 50,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
  discoverButtonText: {
    color: "#fff",
    fontSize: 24,
  },
  dateTimePickerContainer: {
    paddingLeft: 150,
    paddingRight: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    paddingBottom: 10,
  },
  checkboxInput: {
    marginRight: 20,
  },
  leftTitle: {
    fontSize: 18,
    paddingLeft: 30,
    paddingBottom: 18,
    paddingTop: 10,
  },
});
