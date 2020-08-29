import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default class UserInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null,
      city: null,
      timeArray: [],
      budgetArray: [],
      mobilityArray: [],
      interestAray: [],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View></View>

        <ScrollView style={styles.scrollConatainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.bodyText}>Country</Text>
            <DropDownPicker
              style={styles.inputElement}
              // TODO: Obtain countries from the server.
              // OPTIONAL: Show only countries with places.
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
              earchablePlaceholderTextColor="gray"
              seachableStyle={{}}
              searchableError={() => <Text>Not Found</Text>}
            />
          </View>

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
              earchablePlaceholderTextColor="gray"
              seachableStyle={{}}
              searchableError={() => <Text>Not Found</Text>}
            />
          </View>

          <View>
            <Text style={styles.bodyText}>Time Slot</Text>
          </View>
          <View>
            <Text style={styles.bodyText}>Budget</Text>
          </View>
          <View>
            <Text style={styles.bodyText}>Mobility</Text>
          </View>
          <View>
            <Text style={styles.bodyText}>Interest</Text>
          </View>
        </ScrollView>

        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.discoverButton}
            onPress={() => this.props.navigation.navigate("Routes")}
          >
            <Text style={styles.discoverButtonText}>DISCOVER</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
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
    marginBottom: 100,
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
});
