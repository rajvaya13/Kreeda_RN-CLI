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

function LeaderBoardScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Leaderboard</Text>
      <Button title="Click Here" onPress={() => alert('Button Pressed')} />
    </View>
  );
}

export default LeaderBoardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
