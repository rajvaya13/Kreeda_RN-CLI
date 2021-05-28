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
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import {UserImg} from '../styles/Screen1Styles';

function GameScreen({navigation}) {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [foul, setFoul] = useState(0);
  const [foul1, setFoul1] = useState(0);

  function incValue() {
    setCount(count + 1);
  }
  function decValue() {
    setCount(count - 1);
  }

  function incValue1() {
    setCount1(count1 + 1);
  }

  function decValue1() {
    setCount1(count1 - 1);
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
            <Button primary onPress={decValue1}>
              <Text>Undo Player 2</Text>
            </Button>
          </View>

          <View>
            <Button primary onPress={foulVal}>
              <Text>Foul Player 1</Text>
            </Button>
            <Button primary onPress={foulVal1}>
              <Text>Foul Player 2</Text>
            </Button>
          </View>
        </View>
      </SafeAreaView>

      <Button primary>
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
