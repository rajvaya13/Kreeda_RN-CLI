import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Input,
  Item,
  Left,
  ListItem,
  Right,
  Text,
  Thumbnail,
  Title,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {AuthContext1} from '../navigation/AuthProvider';
import {Component} from 'react';

function SearchUser({item}) {
  return (
    <Content key={item.fname}>
      <ListItem avatar>
        <Left>
          <Thumbnail source={{uri: item.userImg}} />
        </Left>
        <Body>
          <Text>
            {item.fname} {item.lname}
          </Text>
          <Text note>{item.phone}</Text>
        </Body>
      </ListItem>
    </Content>
  );
}

export default SearchUser;

{
  /* <Content>
          {this.state.userFiltered.map((item, index) => (
            <ListItem avatar>
              <Left>
                <Thumbnail source={{uri: item.image}} />
              </Left>
              <Body>
                <Text>{item.name}</Text>
                <Text note>{item.phone}</Text>
              </Body>
            </ListItem>
          ))}
        </Content> */
}
