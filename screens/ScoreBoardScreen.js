import React, {Component, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import {
  Table,
  TableWrapper,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';
import firestore from '@react-native-firebase/firestore';

export default function ScoreBoardScreen({navigation}) {
  const [tableTitle, setTableTitle] = useState([
    'Score',
    'Foul',
    'Score',
    'Foul',
  ]);
  const [tableData, setTableData] = useState([
    ['Score Board', '10', '2', '8', '3'],
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Table style={{flexDirection: 'row'}} borderStyle={{borderWidth: 1}}>
          {/* Left Wrapper */}
          <TableWrapper style={{width: 150}}>
            <Cell data="Players" style={styles.singleHead} />
            <TableWrapper style={{flexDirection: 'row'}}>
              <Col
                data={['PLayer1', 'PLayer2']}
                style={styles.head}
                heightArr={[60, 60]}
                textStyle={styles.text}
              />
              <Col
                data={tableTitle}
                style={styles.title}
                heightArr={[30, 30, 30, 30]}
                textStyle={styles.titleText}></Col>
            </TableWrapper>
          </TableWrapper>

          {/* Right Wrapper */}
          <TableWrapper style={{flex: 1}}>
            <Cols
              data={tableData}
              heightArr={[40, 30, 30, 30, 30]}
              textStyle={styles.text}
            />
          </TableWrapper>
        </Table>
      </View>
      <Button
        style={styles.buttonU}
        onPress={() => {
          navigation.navigate('MyTournament');
        }}
        title="Done"
        color="#841584"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  singleHead: {width: 150, height: 40, backgroundColor: '#c8e1ff'},
  head: {flex: 4, backgroundColor: '#c8e1ff'},
  title: {flex: 4, backgroundColor: '#f6f8fa'},
  titleText: {marginRight: 6, textAlign: 'right'},
  text: {textAlign: 'center'},
  btn: {
    width: 150,
    height: 30,
    marginLeft: 15,
    borderRadius: 2,
  },
  btnText: {textAlign: 'center'},
});
