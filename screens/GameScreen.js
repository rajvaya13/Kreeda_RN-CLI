import {
  Container,
  Content,
  Header,
  Icon,
  Input,
  Item,
  Text,
  Footer,
  Button,
  Body,
  Title,
  Left,
  Right,
} from 'native-base';
import React, {useContext} from 'react';
import {useState} from 'react';
import {Alert} from 'react-native';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import {UserImg} from '../styles/Screen1Styles';
import {AuthContext1} from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';

function GameScreen({navigation}) {
  const {user} = useContext(AuthContext1);
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [foul, setFoul] = useState(0);
  const [foul1, setFoul1] = useState(0);
  const [post, setPost] = useState(null);

  const submitScore = async () => {
    firestore()
      .collection('scoreBoard')
      .add({
        userId: user.uid,
        count: count,
        count1: count1,
        foul: foul,
        foul1: foul1,
      })
      .then(() => {
        Alert.alert(
          'Score Submitted',
          'Click on Game Over button to see score!',
        );
        setPost(null);
      })
      .catch(error => {
        console.log(
          'Something went wrong with added post to firestore.',
          error,
        );
      });
  };

  function incValue() {
    if (count != 10) {
      setCount(count + 1);
    } else {
      Alert.alert('Player 1 Wins', 'Press Done Button to submit score!');
    }
  }

  function incValue1() {
    if (count1 != 10) {
      setCount1(count1 + 1);
    } else {
      Alert.alert('Player 2 Wins', 'Press Done Button to submit score!');
    }
  }

  function decValue() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      Alert.alert('Error', 'Score cannot be less than 0!');
    }
  }

  function decValue1() {
    if (count1 > 0) {
      setCount1(count1 - 1);
    } else {
      Alert.alert('Error', 'Score cannot be less than 0!');
    }
  }

  function foulVal() {
    setFoul(foul + 1);
  }

  function foulVal1() {
    setFoul1(foul1 + 1);
  }

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="tennisball-outline" />
          </Button>
        </Left>
        <Body>
          <Title>Game Screen</Title>
        </Body>
        <Right />
      </Header>
      <SafeAreaView style={styles.container}>
        <View style={styles.parent}>
          <Text style={{fontSize: 100}}>{count}</Text>
          <Text style={{fontSize: 100}}>{count1}</Text>
        </View>
        <View style={styles.parent}>
          <Text style={{fontSize: 20}}>Foul: {foul}</Text>
          <Text style={{fontSize: 20}}>Foul: {foul1}</Text>
        </View>
      </SafeAreaView>

      <SafeAreaView style={styles.container}>
        <View style={styles.parent}>
          <Button primary onPress={incValue}>
            <Text>Score Player 1</Text>
          </Button>
          <Button primary onPress={incValue1}>
            <Text>Score Player 2</Text>
          </Button>
        </View>

        <View style={styles.parent}>
          <View>
            <Button primary onPress={decValue}>
              <Text>Undo Player 1</Text>
            </Button>
            <Button primary onPress={foulVal}>
              <Text>Foul Player 1</Text>
            </Button>
          </View>

          <View>
            <Button primary onPress={decValue1}>
              <Text>Undo Player 2</Text>
            </Button>
            <Button primary onPress={foulVal1}>
              <Text>Foul Player 2</Text>
            </Button>
          </View>
        </View>
      </SafeAreaView>
      <Button primary onPress={submitScore}>
        <Text>Done</Text>
      </Button>
      <Button
        primary
        onPress={() => {
          navigation.navigate('ScoreBoardScreen');
        }}>
        <Text>Game Over</Text>
      </Button>
    </Container>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  parent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
