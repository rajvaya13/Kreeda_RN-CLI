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
import React, {useContext, useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput, Alert} from 'react-native';
import {AuthContext1} from '../navigation/AuthProvider';
import {UserImg} from '../styles/Screen1Styles';
import firestore from '@react-native-firebase/firestore';

function BadmintonScreen({navigation}) {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const {user} = useContext(AuthContext1);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [post, setPost] = useState(null);

  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);

  const playGame = async () => {
    firestore()
      .collection('bdmPlayers')
      .add({
        userId: user.uid,
        player1: player1,
        player2: player2,
      })
      .then(() => {
        Alert.alert('Player Added', 'You can start the Tournament!');
        setPost(null);
      })
      .catch(error => {
        console.log(
          'Something went wrong with added post to firestore.',
          error,
        );
      });
  };

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="tennisball-outline" />
          </Button>
        </Left>
        <Body>
          <Title>Badminton Player</Title>
        </Body>
        <Right />
      </Header>

      <Content padder>
        <Text> Player 1</Text>
        <TextInput
          style={styles.input}
          onChangeText={content => setPlayer1(content)}
          value={player1}
        />
        <Text> Player 2</Text>
        <TextInput
          style={styles.input}
          onChangeText={content => setPlayer2(content)}
          value={player2}
        />

        <Button iconRight primary onPress={playGame}>
          <Text>Done</Text>
        </Button>

        <Button
          iconRight
          primary
          onPress={() => {
            navigation.navigate('GameScreen');
          }}>
          <Text>Next</Text>
          <Icon name="arrow-forward" />
        </Button>
      </Content>
    </Container>
  );
}

export default BadmintonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
