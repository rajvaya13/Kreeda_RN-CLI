import {
  Container,
  Content,
  Header,
  Icon,
  Text,
  Button,
  Body,
  Title,
  Left,
  Right,
  Image,
  View,
} from 'native-base';
import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Alert,
  ScrollView,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {AuthContext1} from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

export default function LeaderBoardScreen({navigation}) {
  const [TeamName, setTeamName] = useState('');
  const [TeamTown, setTeamTown] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="baseball-outline" />
          </Button>
        </Left>
        <Body>
          <Title>Leaderboard List</Title>
        </Body>
        <Right />
      </Header>
      <SafeAreaView>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
