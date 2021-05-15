import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native';
import {View, Text, Image} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';

// implemented with Text and Button as children

function HealthTipsScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <Card>
          <Card.Title>Stay Hydrated</Card.Title>
          <Card.Divider />
          <Text style={{marginBottom: 10}}>
            Water helps your body exercise efficiently to stay well hydrated
            during your work.
          </Text>
        </Card>

        <Card>
          <Card.Title>Eat a wll-balanced diet</Card.Title>
          <Card.Divider />
          <Text style={{marginBottom: 10}}>
            Your diet should also contain enough protien and a wide range of
            vitamins and materials.
          </Text>
        </Card>

        <Card>
          <Card.Title>Wear a gear</Card.Title>
          <Card.Divider />
          <Text style={{marginBottom: 10}}>
            Wear your gear wearing a helmet can reduce your risk of a serious
            brain injury during a fall or collision.
          </Text>
        </Card>

        <Card>
          <Card.Title>Know your body's limit</Card.Title>
          <Card.Divider />
          <Text style={{marginBottom: 10}}>
            Listen to the signals that your body feels,know your limits and
            never go too far.
          </Text>
        </Card>

        <Card>
          <Card.Title>Warm up and cool down</Card.Title>
          <Card.Divider />
          <Text style={{marginBottom: 10}}>
            Be sure to follow appropriate warm up and cool down
            regimen,flexibility and execersie.
          </Text>
        </Card>

        <Card>
          <Card.Title>Learn to do your sport right</Card.Title>
          <Card.Divider />
          <Text style={{marginBottom: 10}}>
            Use proper sports equipment to reduce your risk of injuries.
          </Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HealthTipsScreen;
