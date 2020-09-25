import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { CheckBox } from "native-base";
import DropDownPicker from "react-native-dropdown-picker";
import Slider from "@react-native-community/slider";
import GradientButton from "react-native-gradient-buttons";
import TimePicker from "../components/TimePicker";
import { useDispatch, useSelector } from "react-redux";
import { loadCountries } from "../actions/countries";
import { loadCities, loadCitiesfromCountry } from "../actions/cities";

const useGetStates = () => {
  const citiesState = useSelector((state) => state.cities.cities);
  const countriesState = useSelector((state) => state.countries.countries);
  const citiesLoading = useSelector((state) => state.cities.loading);
  const countriesLoading = useSelector((state) => state.countries.loading);

  return [citiesState, countriesState, citiesLoading, countriesLoading];
};

const loadMethods = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCountries());
  }, []);
};


const UserInputs = ({ navigation }) => {
  const dispatch = useDispatch();

  loadMethods();

  useEffect(() => {
    dispatch(loadCitiesfromCountry(country.id));
  }, [country]);

  const [country, setCountry] = useState(0);
  const [city, setCity] = useState(null);
  const [cities, countries, citiesLoading, countriesLoading] = useGetStates();

  let timeArray = [];
  let budgetArray = [];
  let mobilityArray = [];
  let interestArray = [];

  const [walk, walkChecked] = useState(false);
  const [bike, bikeChecked] = useState(false);
  const [publicTransport, publicTransportChecked] = useState(false);
  const [privateTransport, privateTransportChecked] = useState(false);

  const [sightseeing, sightseeingChecked] = useState(false);
  const [museums, museumsChecked] = useState(false);
  const [barsandMusic, barsandMusicChecked] = useState(false);
  const [nightlife, nightlifeChecked] = useState(false);

  let startChosenDate = null;
  let startChosenHour = null;
  let startChosenMinute = null;

  let endChosenDate = null;
  let endChosenHour = null;
  let endChosenMinute = null;

  const [sliderValue, setSlider] = useState(15);

  const [originPoint, setOriginPoint] = useState({
    latitude: 41.387364,
    longitude: 2.1675071,
  });

  const startTimeHandle = (datatime) => {
    startChosenDate = datatime.chosenDate;
    startChosenHour = datatime.chosenHour;
    startChosenMinute = datatime.chosenMinute;
  };

  const endTimeHandle = (datatime) => {
    endChosenDate = datatime.chosenDate;
    endChosenHour = datatime.chosenHour;
    endChosenMinute = datatime.chosenMinute;
  };

  const modifyOriginPoint = (newPoint) => {
    setOriginPoint(newPoint);
  };

  if (citiesLoading || countriesLoading) {
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
              items={[]}
              defaultValue={country}
              placeholder="Loading countries"
              textStyle={{
                fontSize: 18,
              }}
              onChangeItem={(item) => setCountry(item.value)}
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
              items={[]}
              /*items={[
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
            ]}*/
              defaultValue={city}
              placeholder="Loading cities"
              textStyle={{
                fontSize: 18,
              }}
              onChangeItem={(item) => setCity(item.value)}
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
                  navigation.navigate("Location", {
                    point: originPoint,
                    other: modifyOriginPoint,
                  })
                }
              />
              <Text>
                latitude: {Math.round(originPoint.latitude * 1000) / 1000}{" "}
                longitude: {Math.round(originPoint.longitude * 1000) / 1000}
              </Text>
            </View>
          </View>

          {/*--------------------------------- Time selector ---------------------------------*/}
          <View>
            <Text style={styles.bodyText}>Time Slot</Text>
            <View style={styles.dateTimePickerContainer}>
              <TimePicker
                gradientBegin="green"
                gradientEnd="#7cfc00"
                mode="datetime"
                onChange={startTimeHandle}
              />

              <TimePicker
                gradientBegin="red"
                gradientEnd="#800000"
                mode="time"
                onChange={endTimeHandle}
              />
            </View>
          </View>

          {/*--------------------------------- Budget selector ---------------------------------*/}
          <View>
            <Text style={styles.bodyText}>Budget</Text>
            <Text style={{ paddingLeft: 30 }}>Max price: {sliderValue} €</Text>

            <Slider
              defaultValue={sliderValue}
              maximumValue={300}
              minimumValue={0}
              step={1}
              minimumTrackTintColor="orange"
              maximumTrackTintColor="grey"
              thumbTintColor="#00008b"
              onValueChange={(sliderValue) => setSlider(sliderValue)}
            />
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
                    checked={walk}
                    onPress={() => {
                      walkChecked(!walk);
                    }}
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
                    checked={bike}
                    onPress={() => {
                      bikeChecked(!bike);
                    }}
                    style={styles.checkboxInput}
                    color="#00008b"
                  ></CheckBox>
                  <Text>Bike</Text>
                </View>

                <View style={styles.checkboxContainer}>
                  <CheckBox
                    checked={publicTransport}
                    onPress={() => {
                      publicTransportChecked(!publicTransport);
                    }}
                    style={styles.checkboxInput}
                    color="#00008b"
                  ></CheckBox>
                  <Text>Public Transport</Text>
                </View>

                <View style={styles.checkboxContainer}>
                  <CheckBox
                    checked={privateTransport}
                    onPress={() => {
                      privateTransportChecked(!privateTransport);
                    }}
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
                    checked={sightseeing}
                    onPress={() => {
                      {
                        sightseeingChecked(!sightseeing);
                      }
                    }}
                    style={styles.checkboxInput}
                    color="#00008b"
                  ></CheckBox>
                  <Text>Sightseeing</Text>
                </View>

                <View style={styles.checkboxContainer}>
                  <CheckBox
                    checked={museums}
                    onPress={() => {
                      museumsChecked(!museums);
                    }}
                    style={styles.checkboxInput}
                    color="#00008b"
                  ></CheckBox>
                  <Text>Museums</Text>
                </View>

                <View style={styles.checkboxContainer}>
                  <CheckBox
                    checked={barsandMusic}
                    onPress={() => {
                      barsandMusicChecked(!barsandMusic);
                    }}
                    style={styles.checkboxInput}
                    color="#00008b"
                  ></CheckBox>
                  <Text>Bars and Music</Text>
                </View>

                <View style={styles.checkboxContainer}>
                  <CheckBox
                    checked={nightlife}
                    onPress={() => {
                      nightlifeChecked(!nightlife);
                    }}
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
              bike ? mobility.push("bicycling") : null;
              walk ? mobility.push("walking") : null;
              privateTransport ? mobility.push("driving") : null;
              publicTransport ? mobility.push("transit") : null;

              mobilityArray = mobility;

              let interest = [];
              sightseeing ? interest.push(5) : null;
              museums ? interest.push(0) : null;
              barsandMusic ? interest.push(2) : null;
              nightlife ? interest.push(3) : null;
              interestArray = interest;
              navigation.navigate("Selection", {
                country: country,
                city: city,
                typology: interestArray[0],
                travelmode: mobilityArray[0],
                userTimeHours: [
                  Number.parseInt(startChosenHour),
                  Number.parseInt(endChosenHour),
                ],
                userTimeMinutes: [
                  Number.parseInt(startChosenMinute),
                  Number.parseInt(endChosenMinute),
                ],
                originMap: originPoint,
                userBudget: sliderValue,
              });
            }}
          />
        </View>
      </View>
    );
  }

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
            items={countries.map((item) => {
              let label = item.name;
              let value = item.id;
              return { label, value };
            })}
            /*
            items={[
              { label: "United Kingdom", value: "uk" },
              { label: "France", value: "france" },
              { label: "Spain", value: "spain" },
              { label: "United States", value: "us" },
              { label: "Germany", value: "germany" },
              { label: "Portugal", value: "portugal" },
              { label: "Italy", value: "italy" },
            ]}*/
            defaultValue={country}
            placeholder="Select a country"
            textStyle={{
              fontSize: 18,
            }}
            onChangeItem={(item) => setCountry(item.value)}
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
            items={cities.map((item) => {
              let label = item.name;
              let value = item.id;
              return { label, value };
            })}
            /*items={[
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
            ]}*/
            defaultValue={city}
            placeholder="Select a city"
            textStyle={{
              fontSize: 18,
            }}
            onChangeItem={(item) => setCity(item.value)}
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
                navigation.navigate("Location", {
                  point: originPoint,
                  other: modifyOriginPoint,
                })
              }
            />
            <Text>
              latitude: {Math.round(originPoint.latitude * 1000) / 1000}{" "}
              longitude: {Math.round(originPoint.longitude * 1000) / 1000}
            </Text>
          </View>
        </View>

        {/*--------------------------------- Time selector ---------------------------------*/}
        <View>
          <Text style={styles.bodyText}>Time Slot</Text>
          <View style={styles.dateTimePickerContainer}>
            <TimePicker
              gradientBegin="green"
              gradientEnd="#7cfc00"
              mode="datetime"
              onChange={startTimeHandle}
            />

            <TimePicker
              gradientBegin="red"
              gradientEnd="#800000"
              mode="time"
              onChange={endTimeHandle}
            />
          </View>
        </View>

        {/*--------------------------------- Budget selector ---------------------------------*/}
        <View>
          <Text style={styles.bodyText}>Budget</Text>
          <Text style={{ paddingLeft: 30 }}>Max price: {sliderValue} €</Text>

          <Slider
            defaultValue={sliderValue}
            maximumValue={300}
            minimumValue={0}
            step={1}
            minimumTrackTintColor="orange"
            maximumTrackTintColor="grey"
            thumbTintColor="#00008b"
            onValueChange={(sliderValue) => setSlider(sliderValue)}
          />
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
                  checked={walk}
                  onPress={() => {
                    walkChecked(!walk);
                  }}
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
                  checked={bike}
                  onPress={() => {
                    bikeChecked(!bike);
                  }}
                  style={styles.checkboxInput}
                  color="#00008b"
                ></CheckBox>
                <Text>Bike</Text>
              </View>

              <View style={styles.checkboxContainer}>
                <CheckBox
                  checked={publicTransport}
                  onPress={() => {
                    publicTransportChecked(!publicTransport);
                  }}
                  style={styles.checkboxInput}
                  color="#00008b"
                ></CheckBox>
                <Text>Public Transport</Text>
              </View>

              <View style={styles.checkboxContainer}>
                <CheckBox
                  checked={privateTransport}
                  onPress={() => {
                    privateTransportChecked(!privateTransport);
                  }}
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
                  checked={sightseeing}
                  onPress={() => {
                    {
                      sightseeingChecked(!sightseeing);
                    }
                  }}
                  style={styles.checkboxInput}
                  color="#00008b"
                ></CheckBox>
                <Text>Sightseeing</Text>
              </View>

              <View style={styles.checkboxContainer}>
                <CheckBox
                  checked={museums}
                  onPress={() => {
                    museumsChecked(!museums);
                  }}
                  style={styles.checkboxInput}
                  color="#00008b"
                ></CheckBox>
                <Text>Museums</Text>
              </View>

              <View style={styles.checkboxContainer}>
                <CheckBox
                  checked={barsandMusic}
                  onPress={() => {
                    barsandMusicChecked(!barsandMusic);
                  }}
                  style={styles.checkboxInput}
                  color="#00008b"
                ></CheckBox>
                <Text>Bars and Music</Text>
              </View>

              <View style={styles.checkboxContainer}>
                <CheckBox
                  checked={nightlife}
                  onPress={() => {
                    nightlifeChecked(!nightlife);
                  }}
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
            bike ? mobility.push("bicycling") : null;
            walk ? mobility.push("walking") : null;
            privateTransport ? mobility.push("driving") : null;
            publicTransport ? mobility.push("transit") : null;

            mobilityArray = mobility;

            let interest = [];
            sightseeing ? interest.push(5) : null;
            museums ? interest.push(0) : null;
            barsandMusic ? interest.push(2) : null;
            nightlife ? interest.push(3) : null;
            interestArray = interest;
            navigation.navigate("Selection", {
              country: country,
              city: city,
              typology: interestArray[0],
              travelmode: mobilityArray[0],
              userTimeHours: [
                Number.parseInt(startChosenHour),
                Number.parseInt(endChosenHour),
              ],
              userTimeMinutes: [
                Number.parseInt(startChosenMinute),
                Number.parseInt(endChosenMinute),
              ],
              originMap: originPoint,
              userBudget: sliderValue,
            });
          }}
        />
      </View>
    </View>
  );
};

{
  /*--------------------------------- Stylesheet ---------------------------------*/
}

export default UserInputs;

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
