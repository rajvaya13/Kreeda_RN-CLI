import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Title,
} from 'native-base';
export default function AboutUs() {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="ios-call-sharp" />
          </Button>
        </Left>
        <Body>
          <Title>About the Team</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={require('../assets/team/raj1.jpg')} />
              <Body>
                <Text>Raj Vaya</Text>
                <Text note>raj.vaya2017@gmail.com</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Text style={{fontSize: 15}}>Phone: 8385883914</Text>
          </CardItem>
        </Card>
      </Content>
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={require('../assets/team/shyam.jpeg')} />
              <Body>
                <Text>Shyam Dhage</Text>
                <Text note>shyamdhage000@gmail.com</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Text style={{fontSize: 15}}>Phone: 8600034390</Text>
          </CardItem>
        </Card>
      </Content>
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={require('../assets/team/rajashri.jpeg')} />
              <Body>
                <Text>Rajshri Kothe</Text>
                <Text note>kotherajashri@gmail.com</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Text style={{fontSize: 15}}>Phone: 8788170208</Text>
          </CardItem>
        </Card>
      </Content>

      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={require('../assets/team/shivani.jpeg')} />
              <Body>
                <Text>Shivani Nanadikar</Text>
                <Text note>shivaninanadikar27@gmail.com</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Text style={{fontSize: 15}}>Phone: 8208810042</Text>
          </CardItem>
        </Card>
      </Content>

      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={require('../assets/team/puja.jpeg')} />
              <Body>
                <Text>Puja Jinkeri</Text>
                <Text note>jinkerispooja@gmail.com</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Text style={{fontSize: 15}}>Phone: 8483980768</Text>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}
