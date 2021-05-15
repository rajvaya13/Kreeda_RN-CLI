import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
var level = [
  {label: 'Local', value: 0},
  {label: 'Organization', value: 1},
];
export default class AddTournament extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
    };
  }

  handlePicker = () => {
    this.setState({
      isVisible: false,
    });
  };

  hidePicker = () => {
    this.setState({
      isVisible: false,
    });
  };
  render() {
    return (
      <View style={styles.AddTournaments}>
        <Text style={styles.header}>Add Tournaments</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Tournament Name"
          underlineColorAndroid={'transparent'}></TextInput>
        <TextInput
          style={styles.textinput}
          placeholder="Ground"
          underlineColorAndroid={'transparent'}></TextInput>
        <TextInput
          style={styles.textinput}
          placeholder="Organizer Name"
          underlineColorAndroid={'transparent'}></TextInput>
        <TextInput
          style={styles.textinput}
          placeholder="Contact No."
          underlineColorAndroid={'transparent'}></TextInput>

        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}></DateTimePicker>

        <RadioForm radio_props={level} onPress={value => {}} />

        <TextInput
          style={styles.textinput}
          placeholder="Location"
          underlineColorAndroid={'transparent'}></TextInput>
        <TextInput
          style={styles.textinput}
          placeholder="No. of Overs(1-99)"
          underlineColorAndroid={'transparent'}></TextInput>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btntext}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  AddTournaments: {
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 30,
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
