import {createStackNavigator} from '@react-navigation/stack';
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
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {UserImg} from '../styles/Screen1Styles';

const Stack = createStackNavigator();

function SportScreen({navigation}) {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="tennisball-outline" />
          </Button>
        </Left>
        <Body>
          <Title>Badminton</Title>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Text
          style={{
            fontSize: 25,
            textDecorationLine: 'underline',
            fontWeight: 'bold',
          }}>
          Rules:-
        </Text>
        <Text>1. The match consists of the best of 10 points.</Text>
        <Text>2. First Player to score 10 points wins the game.</Text>
        <Text>3. The fouls are counted.</Text>
        <Text>4. Player 1 one start the service.</Text>
        <Button
          iconRight
          primary
          onPress={() => {
            navigation.navigate('BadmintonScreen');
          }}>
          <Text>Next</Text>
          <Icon name="arrow-forward" />
        </Button>
      </Content>
      <Footer />
    </Container>
  );
}

export default SportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
