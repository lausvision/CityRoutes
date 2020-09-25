import React from "react";
import {
  StyleSheet,
  Text,
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";
import GradientButton from "react-native-gradient-buttons";

export default class TimePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      chosenDate: "",
      chosenHour: "",
      chosenMinute: "",
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

  componentDidUpdate() {
    if (this.props.onChange) {
      this.props.onChange(this.state);
    }
  }

  render() {
    return (
      <>
        <GradientButton
          style={{ marginVertical: 8 }}
          text="START"
          textStyle={{ fontSize: 15 }}
          gradientBegin={this.props.gradientBegin}
          gradientEnd={this.props.gradientEnd}
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
          mode={this.props.mode}
          is24Hour={true}
        ></DateTimePicker>
        <Text>{this.state.chosenDate}</Text>
      </>
    );
  }
}
