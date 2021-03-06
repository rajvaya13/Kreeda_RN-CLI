import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
  FlatList,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import PostCard from '../components/PostCard';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import {Container} from '../styles/Screen1Styles';

function DetailScreen({navigation}) {
  const [posts, setPosts] = useState(null);
  const [tournamentPost, setTournament] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);

  const fetchPosts = async () => {
    try {
      const list = [];

      await firestore()
        .collection('posts')
        .orderBy('postTime', 'desc')
        .get()
        .then(querySnapshot => {
          // console.log('Total Posts: ', querySnapshot.size);

          querySnapshot.forEach(doc => {
            const {userId, post, postImg, postTime, likes, comments} =
              doc.data();
            list.push({
              id: doc.id,
              userId,
              userName: 'Test Name',
              userImg:
                'https://media-exp1.licdn.com/dms/image/C4D03AQEvkhfvtp9LnQ/profile-displayphoto-shrink_400_400/0/1598121045484?e=1623283200&v=beta&t=pGTm9ZcypmAzFZaXojaWfy-nr2XYp1P-5WnPrb2zC0M',
              postTime: postTime,
              post,
              postImg,
              liked: false,
              likes,
              comments,
            });
          });
        });

      setPosts(list);

      if (loading) {
        setLoading(false);
      }

      console.log('Posts: ', posts);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchTournament = async () => {
    try {
      const list = [];

      await firestore()
        .collection('tournamentPost')
        .orderBy('postTime', 'desc')
        .get()
        .then(querySnapshot => {
          // console.log('Total Posts: ', querySnapshot.size);

          querySnapshot.forEach(doc => {
            const {
              userId,
              tName,
              oName,
              nOfOvers,
              location,
              ground,
              cNumber,
              post,
              postImg,
              postTime,
            } = doc.data();
            list.push({
              id: doc.id,
              userId,
              userName: 'Test Name',
              userImg:
                'https://lh3.googleusercontent.com/Aj-96fDgExPme9DKq82az4XR9SzsQo4X1PnFYOJPjWOx50C5eDjMIdYGB2jCWeAvzEw-x9RFP33mcp_A-IhiqKo_J8orEpqweXOzJDL_pQelB3J2_mH8OttSd4AkNueHt7ehk0s9p43-2frHmEEpK2j1axKitATMe696wqsI_Srbz7kyrTA6t39eMoOiX3y2Nn_h972FxglhkajqLES-Pqbzh8qWtXJrJW7yk-VBFsD37RJCopILNX4DkWlG5o88OfwU2ijMLIv-YnHJY9DW1if7gH9sH1Y0udJlWuvXF2PTgQntblyni52cC0ptWc5i9rME2L3DxaRvkukxRUYr8aZhK8k4J6gDsKUh9NsfaO0ufEpnxHzf30hGwwDZfy_VX_3k5WM_XlOn0pChPSnPL_V0X51KMORzx_S0DU2oSzalBc7XlyxQ8vsnVLXjtW1MIwAeGjAxJYov2DEoh67zpInWnc43QEclb1qzL6CgG4QxWSZ-VP8mA9t4emyupZZwMVnFAdbcZF1Lrbx2LmehK31VHhbaKklurt2IaXEdAHoCpm-OG84b_JH_IdDQ3Sf6xrV1-3z7RRElXQmrjtmTay5i4R6n7N6m5276SJaSwjIfdjy1DR5Lt6xKdArWpGz30BxWsacSzo6mM5DCUy-FiePLxikJ8_djvO5RIR3_QL-S3hxRQo1c_fv2g2OW5bWw2yciKfr0p9VdhLSNs88faw=s200-no?authuser=4',
              postTime: postTime,
              post,
              postImg,
              liked: false,
              cNumber,
              ground,
              oName,
              location,
              tName,
              nOfOvers,
            });
          });
        });

      setTournament(list);

      if (loading) {
        setLoading(false);
      }

      console.log('Tournament: ', tournamentPost);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchTournament();
    navigation.addListener('focus', () => setLoading(!loading));
  }, [navigation, loading]);

  useEffect(() => {
    fetchPosts();
    fetchTournament();
    setDeleted(false);
  }, [deleted]);

  const handleDelete = postId => {
    Alert.alert(
      'Delete post',
      'Are you sure?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed!'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => deletePost(postId),
        },
      ],
      {cancelable: false},
    );
  };

  const handleDelete1 = tournamentId => {
    Alert.alert(
      'Delete post',
      'Are you sure?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed!'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => deletePost1(tournamentId),
        },
      ],
      {cancelable: false},
    );
  };

  const deletePost = postId => {
    console.log('Current Post Id: ', postId);

    firestore()
      .collection('posts')
      .doc(postId)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          const {postImg} = documentSnapshot.data();

          if (postImg != null) {
            const storageRef = storage().refFromURL(postImg);
            const imageRef = storage().ref(storageRef.fullPath);

            imageRef
              .delete()
              .then(() => {
                console.log(`${postImg} has been deleted successfully.`);
                deleteFirestoreData(postId);
              })
              .catch(e => {
                console.log('Error while deleting the image. ', e);
              });
            // If the post image is not available
          } else {
            deleteFirestoreData(postId);
          }
        }
      });
  };

  const deletePost1 = tournamentId => {
    console.log('Current Tournament Id: ', tournamentId);

    firestore()
      .collection('tournamentPost')
      .doc(tournamentId)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          const {postImg} = documentSnapshot.data();

          if (postImg != null) {
            const storageRef = storage().refFromURL(postImg);
            const imageRef = storage().ref(storageRef.fullPath);

            imageRef
              .delete()
              .then(() => {
                console.log(`${postImg} has been deleted successfully.`);
                deleteFirestoreData1(tournamentId);
              })
              .catch(e => {
                console.log('Error while deleting the image. ', e);
              });
            // If the post image is not available
          } else {
            deleteFirestoreData1(tournamentId);
          }
        }
      });
  };

  const deleteFirestoreData = postId => {
    firestore()
      .collection('posts')
      .doc(postId)
      .delete()
      .then(() => {
        Alert.alert(
          'Post deleted!',
          'Your post has been deleted successfully!',
        );
        setDeleted(true);
      })
      .catch(e => console.log('Error deleting posst.', e));
  };

  const deleteFirestoreData1 = tournamentId => {
    firestore()
      .collection('tournamentPost')
      .doc(tournamentId)
      .delete()
      .then(() => {
        Alert.alert(
          'Tournament deleted!',
          'Your post has been deleted successfully!',
        );
        setDeleted(true);
      })
      .catch(e => console.log('Error deleting Tournament.', e));
  };

  const ListHeader = () => {
    return null;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* {loading ? (
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{alignItems: 'center'}}>
          <SkeletonPlaceholder>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: 60, height: 60, borderRadius: 50}} />
              <View style={{marginLeft: 20}}>
                <View style={{width: 120, height: 20, borderRadius: 4}} />
                <View
                  style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
                />
              </View>
            </View>
            <View style={{marginTop: 10, marginBottom: 30}}>
              <View style={{width: 300, height: 20, borderRadius: 4}} />
              <View
                style={{marginTop: 6, width: 250, height: 20, borderRadius: 4}}
              />
              <View
                style={{marginTop: 6, width: 350, height: 200, borderRadius: 4}}
              />
            </View>
          </SkeletonPlaceholder>
          <SkeletonPlaceholder>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: 60, height: 60, borderRadius: 50}} />
              <View style={{marginLeft: 20}}>
                <View style={{width: 120, height: 20, borderRadius: 4}} />
                <View
                  style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
                />
              </View>
            </View>
            <View style={{marginTop: 10, marginBottom: 30}}>
              <View style={{width: 300, height: 20, borderRadius: 4}} />
              <View
                style={{marginTop: 6, width: 250, height: 20, borderRadius: 4}}
              />
              <View
                style={{marginTop: 6, width: 350, height: 200, borderRadius: 4}}
              />
            </View>
          </SkeletonPlaceholder>
        </ScrollView>
      ) : (
        <Container>
          <FlatList
            data={posts}
            renderItem={({item}) => (
              <PostCard
                item={item}
                onDelete={handleDelete}
                onPress={() =>
                  navigation.navigate('HomeProfile', {userId: item.userId})
                }
              />
            )}
            keyExtractor={item => item.id}
            ListHeaderComponent={ListHeader}
            ListFooterComponent={ListHeader}
            showsVerticalScrollIndicator={false}
          />
        </Container>
      )} */}
      {loading ? (
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{alignItems: 'center'}}>
          <SkeletonPlaceholder>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: 60, height: 60, borderRadius: 50}} />
              <View style={{marginLeft: 20}}>
                <View style={{width: 120, height: 20, borderRadius: 4}} />
                <View
                  style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
                />
              </View>
            </View>
            <View style={{marginTop: 10, marginBottom: 30}}>
              <View style={{width: 300, height: 20, borderRadius: 4}} />
              <View
                style={{marginTop: 6, width: 250, height: 20, borderRadius: 4}}
              />
              <View
                style={{marginTop: 6, width: 350, height: 200, borderRadius: 4}}
              />
            </View>
          </SkeletonPlaceholder>
          <SkeletonPlaceholder>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: 60, height: 60, borderRadius: 50}} />
              <View style={{marginLeft: 20}}>
                <View style={{width: 120, height: 20, borderRadius: 4}} />
                <View
                  style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
                />
              </View>
            </View>
            <View style={{marginTop: 10, marginBottom: 30}}>
              <View style={{width: 300, height: 20, borderRadius: 4}} />
              <View
                style={{marginTop: 6, width: 250, height: 20, borderRadius: 4}}
              />
              <View
                style={{marginTop: 6, width: 350, height: 200, borderRadius: 4}}
              />
            </View>
          </SkeletonPlaceholder>
        </ScrollView>
      ) : (
        <Container>
          <FlatList
            data={tournamentPost}
            renderItem={({item}) => (
              <PostCard
                item={item}
                onDelete={handleDelete1}
                onPress={() =>
                  navigation.navigate('HomeProfile', {userId: item.userId})
                }
              />
            )}
            keyExtractor={item => item.id}
            ListHeaderComponent={ListHeader}
            ListFooterComponent={ListHeader}
            showsVerticalScrollIndicator={false}
          />
        </Container>
      )}
    </SafeAreaView>
  );
}

export default DetailScreen;
