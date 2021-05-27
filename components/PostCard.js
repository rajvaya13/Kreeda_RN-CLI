import React, {useContext, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaView, ScrollView} from 'react-native';
import {
  Container,
  Card,
  UserImg,
  UserInfo,
  UserInfoText,
  UserName,
  PostTime,
  PostText,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Divider,
} from '../styles/Screen1Styles';
import ProgressiveImage from './ProgressiveImage';

import {AuthContext1} from '../navigation/AuthProvider';
import moment from 'moment';
import {TouchableOpacity} from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';

function PostCard({item, onDelete, onPress}) {
  const {user} = useContext(AuthContext1);
  const [userData, setUserData] = useState(null);
  var likeIcon = item.liked ? 'heart' : 'heart-outline';
  var likeIconColor = item.liked ? '#2e64e5' : '#333';

  if (item.likes == 1) {
    var likeText = '1 Like';
  } else if (item.likes > 1) {
    likeText = item.likes + ' Likes';
  } else {
    likeText = 'Like';
  }

  if (item.comments == 1) {
    var commentText = '1 Comment';
  } else if (item.comments > 1) {
    commentText = item.comments + ' Comments';
  } else {
    commentText = 'Comment';
  }

  const getUser = async () => {
    await firestore()
      .collection('users')
      .doc(item.userId)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          console.log('User Data', documentSnapshot.data());
          setUserData(documentSnapshot.data());
        }
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        {/* <Card key={item.id}>
          <UserInfo>
            <UserImg
              source={{
                uri: userData
                  ? userData.userImg ||
                    'https://wonderfulengineering.com/wp-content/uploads/2014/10/wallpaper-photos-31.jpg'
                  : 'https://wonderfulengineering.com/wp-content/uploads/2014/10/wallpaper-photos-31.jpg',
              }}
            />
            <UserInfoText>
              <TouchableOpacity onPress={onPress}>
                <UserName>
                  {userData ? userData.fname || 'Test' : 'Test'}{' '}
                  {userData ? userData.lname || 'User' : 'Name'}
                </UserName>
              </TouchableOpacity>

              <PostTime>{moment(item.postTime.toDate()).fromNow()}</PostTime>
            </UserInfoText>
          </UserInfo>
          <PostText>{item.post}</PostText>
          {item.postImg != null ? (
            <ProgressiveImage
              defaultImageSource={require('../assets/default-img.jpg')}
              source={{uri: item.postImg}}
              style={{width: '100%', height: 250}}
              resizeMode="cover"
            />
          ) : (
            <Divider />
          )}

          <InteractionWrapper>
            {user.uid == item.userId ? (
              <Interaction onPress={() => onDelete(item.id)}>
                <Icon name="md-trash-bin" size={25} />
              </Interaction>
            ) : null}
          </InteractionWrapper>
        </Card> */}

        <Card key={item.id}>
          <UserInfo>
            <UserImg
              source={{
                uri: userData
                  ? userData.userImg ||
                    'https://lh3.googleusercontent.com/Aj-96fDgExPme9DKq82az4XR9SzsQo4X1PnFYOJPjWOx50C5eDjMIdYGB2jCWeAvzEw-x9RFP33mcp_A-IhiqKo_J8orEpqweXOzJDL_pQelB3J2_mH8OttSd4AkNueHt7ehk0s9p43-2frHmEEpK2j1axKitATMe696wqsI_Srbz7kyrTA6t39eMoOiX3y2Nn_h972FxglhkajqLES-Pqbzh8qWtXJrJW7yk-VBFsD37RJCopILNX4DkWlG5o88OfwU2ijMLIv-YnHJY9DW1if7gH9sH1Y0udJlWuvXF2PTgQntblyni52cC0ptWc5i9rME2L3DxaRvkukxRUYr8aZhK8k4J6gDsKUh9NsfaO0ufEpnxHzf30hGwwDZfy_VX_3k5WM_XlOn0pChPSnPL_V0X51KMORzx_S0DU2oSzalBc7XlyxQ8vsnVLXjtW1MIwAeGjAxJYov2DEoh67zpInWnc43QEclb1qzL6CgG4QxWSZ-VP8mA9t4emyupZZwMVnFAdbcZF1Lrbx2LmehK31VHhbaKklurt2IaXEdAHoCpm-OG84b_JH_IdDQ3Sf6xrV1-3z7RRElXQmrjtmTay5i4R6n7N6m5276SJaSwjIfdjy1DR5Lt6xKdArWpGz30BxWsacSzo6mM5DCUy-FiePLxikJ8_djvO5RIR3_QL-S3hxRQo1c_fv2g2OW5bWw2yciKfr0p9VdhLSNs88faw=s200-no?authuser=4'
                  : 'https://lh3.googleusercontent.com/Aj-96fDgExPme9DKq82az4XR9SzsQo4X1PnFYOJPjWOx50C5eDjMIdYGB2jCWeAvzEw-x9RFP33mcp_A-IhiqKo_J8orEpqweXOzJDL_pQelB3J2_mH8OttSd4AkNueHt7ehk0s9p43-2frHmEEpK2j1axKitATMe696wqsI_Srbz7kyrTA6t39eMoOiX3y2Nn_h972FxglhkajqLES-Pqbzh8qWtXJrJW7yk-VBFsD37RJCopILNX4DkWlG5o88OfwU2ijMLIv-YnHJY9DW1if7gH9sH1Y0udJlWuvXF2PTgQntblyni52cC0ptWc5i9rME2L3DxaRvkukxRUYr8aZhK8k4J6gDsKUh9NsfaO0ufEpnxHzf30hGwwDZfy_VX_3k5WM_XlOn0pChPSnPL_V0X51KMORzx_S0DU2oSzalBc7XlyxQ8vsnVLXjtW1MIwAeGjAxJYov2DEoh67zpInWnc43QEclb1qzL6CgG4QxWSZ-VP8mA9t4emyupZZwMVnFAdbcZF1Lrbx2LmehK31VHhbaKklurt2IaXEdAHoCpm-OG84b_JH_IdDQ3Sf6xrV1-3z7RRElXQmrjtmTay5i4R6n7N6m5276SJaSwjIfdjy1DR5Lt6xKdArWpGz30BxWsacSzo6mM5DCUy-FiePLxikJ8_djvO5RIR3_QL-S3hxRQo1c_fv2g2OW5bWw2yciKfr0p9VdhLSNs88faw=s200-no?authuser=4',
              }}
            />
            <UserInfoText>
              <TouchableOpacity onPress={onPress}>
                <UserName>
                  {userData ? userData.fname || 'Test' : 'Test'}{' '}
                  {userData ? userData.lname || 'User' : 'Name'}
                </UserName>
              </TouchableOpacity>

              <PostTime>{moment(item.postTime.toDate()).fromNow()}</PostTime>
            </UserInfoText>
          </UserInfo>
          <PostText>Tournament Name - {item.tName}</PostText>
          <PostText>Ground - {item.ground}</PostText>
          <PostText>Location - {item.location}</PostText>
          {item.postImg != null ? (
            <ProgressiveImage
              defaultImageSource={require('../assets/default-img.jpg')}
              source={{uri: item.postImg}}
              style={{width: '100%', height: 250}}
              resizeMode="cover"
            />
          ) : (
            <Divider />
          )}

          <InteractionWrapper>
            {user.uid == item.userId ? (
              <Interaction onPress={() => onDelete(item.id)}>
                <Icon name="md-trash-bin" size={25} />
              </Interaction>
            ) : null}
          </InteractionWrapper>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PostCard;
