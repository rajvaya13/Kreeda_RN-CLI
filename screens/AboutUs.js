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
              <Thumbnail
                source={{
                  uri: 'https://lh3.googleusercontent.com/6ls_1frdQKCYY-MniUZwdlRskls63LzXKG4Afuvdw1R-uIM6BLPmxJoxwkl0QEA8X9hswAmjkzdaCxIOXB3qKYj8a6cq-DkOAyPXGDfJ5c_PyAy0nPmo608v5kABjtaEYdCLXGNQfgA9OYWeZUeR8e0UCobWYGWu36OzsoqX8mWQJZtPNfp-OJ_VZWF60N-pCu89vsGOacH4rqlwipPeYxBFF9fXb4P68hZiRz7fc2Or7dGpBrKsfKQ-IfQxKF9ThYvF6G77OcQaKciPmtQeiObr4T8pcqNlRai_Hek6uVMkLwcdC-V78n2GGVUnV9qaejy9CI4NsGAfx96BmhEssv8qO6YpTYcapwBaBbOAJgLj321v9ol6hGjLEofgKZSAiYeiYElDyezKe3kuqZUGgIZY91zvIcOoMYJmgeitRMmBkc-auCq_fzOh4Ps3gtlk0RbHGIiMbhUSWK875WdxWAtuEG322t1HeIql_vSPJ4OkJCSvpN1Id6wsRR6rvCXGOc3YOyFxP9mA8RZZXfhAYEOJSS9myEeqyk5MILVcDjSGqXrvoyBuwlDFV-t-hE2PmQUYsGwIYXqW240MV8lQ1dRDO54LOlB9P3ESmnBkYOpech44f2QZyyMx3RnwMZKXaLqetPlN0sJYrC_yK_z-CIeEzYnrKAV5EuHpEpwHvPatLIDGcMdZViOPhJBlJajYOXE-dsg2V24ISab4mrSDAQ=s800-no?authuser=4',
                }}
              />
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
    </Container>
  );
}
