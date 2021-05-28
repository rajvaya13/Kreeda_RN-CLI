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
        <Text>10 Rounds Game</Text>
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
