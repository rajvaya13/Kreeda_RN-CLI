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
import {SafeAreaView, StyleSheet, TextInput, Alert,ScrollView} from 'react-native';
import {AuthContext1} from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';



function LeaderBoardListScreen({navigation}) {
  
  const [TeamName, setTeamName] = useState("");
  const [TeamTown, setTeamTown] = useState("");
  const [isUploading,setIsUploading] = useState(false);
  const DATA = [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
      },
    ];

    return(
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
       <FlatList>
           data={DATA}
           keyExtractor={(item)=>item.id}
           renderItem={({item})=>{
               return (<View>
                   <View>
                       <Text>
                           {item.title}
                       </Text>
                   </View>
               </View>)
           }
           }
       </FlatList>
       </SafeAreaView>
    </Container>
    
        )

    }

export default LeaderBoardListScreen;

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     input: {
//       height: 40,
//       margin: 12,
//       borderWidth: 1,
//       color : 'black'
//     },
//     textinput:{
//         textAlign: 'center'
//     },
//     contentContainer:{
//         alignContent:'center'
//     },
//     teamImage:{
//         height:150,
//         width:150,
//         borderRadius: 75
//     },
//     AddTeamstyle:{
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     userImg: {
//       height: 150,
//       width: 150,
//       borderRadius: 75,
//     }
//   });
