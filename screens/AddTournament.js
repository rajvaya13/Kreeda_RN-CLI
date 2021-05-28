import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import DateTimePicker from 'react-native-modal-datetime-picker';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import {FloatingAction} from 'react-native-floating-action';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {AddDoc, AddImage, InputWrapper, StatusWrapper} from '../styles/AddPost';
import storage from '@react-native-firebase/storage';

import firestore from '@react-native-firebase/firestore';
import {ActivityIndicator} from 'react-native-paper';
import {AuthContext1} from '../navigation/AuthProvider';

// var level = [
//   {label: 'Local', value: 0},
//   {label: 'Organization', value: 1},
// ];

LogBox.ignoreAllLogs();
export default function AddTournament() {
  const {user} = useContext(AuthContext1);
  const actions = [
    {
      text: 'Upload Documents',
      icon: <Icon name="md-images-outline" style={styles.actionButtonIcon} />,
      name: 'bt_gallery',
      position: 4,
    },
  ];
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [post, setPost] = useState(null);

  const [tName, setTName] = useState(null);
  const [ground, setGround] = useState(null);
  const [oName, setOName] = useState(null);
  const [cNumber, setCNumber] = useState(null);
  const [location, setLocation] = useState(null);
  const [nOfOvers, setNoOfOvers] = useState(null);

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      // console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
      this.bs.current.snapTo(1);
    });
  };

  const submitPost = async () => {
    const imageUrl = await uploadImage();
    // console.log('Image Url: ', imageUrl);
    // console.log('Post: ', post);

    firestore()
      .collection('tournamentPost')
      .add({
        userId: user.uid,
        post: post,
        postImg: imageUrl,
        postTime: firestore.Timestamp.fromDate(new Date()),
        tName: tName,
        ground: ground,
        oName: oName,
        cNumber: cNumber,
        location: location,
        nOfOvers: nOfOvers,
      })
      .then(() => {
        // console.log('Post Added!');
        Alert.alert('Post published!', 'Tournament published Successfully!');
        setPost(null);
      })
      .catch(error => {
        console.log(
          'Something went wrong with added post to firestore.',
          error,
        );
      });
  };

  const uploadImage = async () => {
    if (image == null) {
      return null;
    }
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;

    setUploading(true);
    setTransferred(0);

    const storageRef = storage().ref(`tournament/${filename}`);
    const task = storageRef.putFile(uploadUri);
    task.on('state_changed', taskSnapshot => {
      // console.log(
      //   `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      // );

      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100,
      );
    });

    try {
      await task;
      const url = await storageRef.getDownloadURL();
      setUploading(false);
      setImage(null);
      return url;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  return (
    <ScrollView>
      <View style={styles.AddTournaments}>
        <Text style={styles.header}>Add Tournaments</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Tournament Name"
          value={tName}
          onChangeText={content => setTName(content)}
          underlineColorAndroid={'transparent'}></TextInput>
        <TextInput
          style={styles.textinput}
          placeholder="Ground"
          value={ground}
          onChangeText={content => setGround(content)}
          underlineColorAndroid={'transparent'}></TextInput>
        <TextInput
          style={styles.textinput}
          placeholder="Organizer Name"
          value={oName}
          onChangeText={content => setOName(content)}
          underlineColorAndroid={'transparent'}></TextInput>
        <TextInput
          style={styles.textinput}
          placeholder="Contact No."
          value={cNumber}
          onChangeText={content => setCNumber(content)}
          underlineColorAndroid={'transparent'}></TextInput>

        {/* <DateTimePicker
            isVisible={this.state.isVisible}
            onConfirm={this.handlePicker}
            onCancel={this.hidePicker}></DateTimePicker> */}

        {/* <RadioForm radio_props={level} onPress={value => {}} /> */}

        <TextInput
          style={styles.textinput}
          placeholder="Location"
          value={location}
          onChangeText={content => setLocation(content)}
          underlineColorAndroid={'transparent'}></TextInput>
        <TextInput
          style={styles.textinput}
          placeholder="No. of Rounds"
          value={nOfOvers}
          onChangeText={content => setNoOfOvers(content)}
          underlineColorAndroid={'transparent'}></TextInput>

        <InputWrapper>
          {image != null ? <AddDoc source={{uri: image}} /> : null}
          <TouchableOpacity
            style={styles.userBtn}
            onPress={choosePhotoFromLibrary}>
            <Text style={styles.userBtnTxt}>Add Documents</Text>
          </TouchableOpacity>
        </InputWrapper>
        {uploading ? (
          <StatusWrapper>
            <Text>{transferred} % Completed!</Text>
            <ActivityIndicator size="large" color="#0000ff" />
          </StatusWrapper>
        ) : (
          <TouchableOpacity style={styles.userBtn} onPress={submitPost}>
            <Text style={styles.userBtnTxt}>Submit</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  AddTournaments: {
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
    backgroundColor: 'grey',
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 10,
    color: 'black',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 30,
    marginBottom: 20,

    paddingBottom: 10,
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold',
  },
  userBtn: {
    borderColor: '#2e64e5',
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnTxt: {
    color: '#2e64e5',
  },
});
