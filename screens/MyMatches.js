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

function MyMatches({navigation}) {
  return (
    <View style={styles.container}>
      <Text>MyMatches</Text>
      <Button title="Click Here" onPress={() => alert('Button Pressed')} />
    </View>
  );
}

export default MyMatches;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
