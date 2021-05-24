import React, {useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
} from 'react-native';
import {UserImg} from '../styles/Screen1Styles';

function Achievement({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Achievement</Text>
      <Button title="Click Here" onPress={() => alert('Button Pressed')} />
    </View>
  );
}

export default Achievement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
