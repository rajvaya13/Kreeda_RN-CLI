import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Button,
} from 'react-native';
import {AuthContext1} from '../navigation/AuthProvider';
import {UserImg} from '../styles/Screen1Styles';
import firestore from '@react-native-firebase/firestore';
import PostCard from '../components/PostCard';

function ProfileScreen({navigation, route}) {
  const {user} = useContext(AuthContext1);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);
  const [userData, setUserData] = useState(null);

  const fetchPosts = async () => {
    try {
      const list = [];

      await firestore()
        .collection('posts')
        .where('userId', '==', route.params ? route.params.userId : user.uid)
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

  const getUser = async () => {
    await firestore()
      .collection('users')
      .doc(route.params ? route.params.userId : user.uid)
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
    fetchPosts();
    navigation.addListener('focus', () => setLoading(!loading));
  }, [navigation, loading]);

  const handleDelete = () => {};

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
        showsVerticalScrollIndicator={false}>
        <Image
          style={styles.userImg}
          source={{
            uri: userData
              ? userData.userImg ||
                'https://lh3.googleusercontent.com/Aj-96fDgExPme9DKq82az4XR9SzsQo4X1PnFYOJPjWOx50C5eDjMIdYGB2jCWeAvzEw-x9RFP33mcp_A-IhiqKo_J8orEpqweXOzJDL_pQelB3J2_mH8OttSd4AkNueHt7ehk0s9p43-2frHmEEpK2j1axKitATMe696wqsI_Srbz7kyrTA6t39eMoOiX3y2Nn_h972FxglhkajqLES-Pqbzh8qWtXJrJW7yk-VBFsD37RJCopILNX4DkWlG5o88OfwU2ijMLIv-YnHJY9DW1if7gH9sH1Y0udJlWuvXF2PTgQntblyni52cC0ptWc5i9rME2L3DxaRvkukxRUYr8aZhK8k4J6gDsKUh9NsfaO0ufEpnxHzf30hGwwDZfy_VX_3k5WM_XlOn0pChPSnPL_V0X51KMORzx_S0DU2oSzalBc7XlyxQ8vsnVLXjtW1MIwAeGjAxJYov2DEoh67zpInWnc43QEclb1qzL6CgG4QxWSZ-VP8mA9t4emyupZZwMVnFAdbcZF1Lrbx2LmehK31VHhbaKklurt2IaXEdAHoCpm-OG84b_JH_IdDQ3Sf6xrV1-3z7RRElXQmrjtmTay5i4R6n7N6m5276SJaSwjIfdjy1DR5Lt6xKdArWpGz30BxWsacSzo6mM5DCUy-FiePLxikJ8_djvO5RIR3_QL-S3hxRQo1c_fv2g2OW5bWw2yciKfr0p9VdhLSNs88faw=s200-no?authuser=4'
              : 'https://lh3.googleusercontent.com/Aj-96fDgExPme9DKq82az4XR9SzsQo4X1PnFYOJPjWOx50C5eDjMIdYGB2jCWeAvzEw-x9RFP33mcp_A-IhiqKo_J8orEpqweXOzJDL_pQelB3J2_mH8OttSd4AkNueHt7ehk0s9p43-2frHmEEpK2j1axKitATMe696wqsI_Srbz7kyrTA6t39eMoOiX3y2Nn_h972FxglhkajqLES-Pqbzh8qWtXJrJW7yk-VBFsD37RJCopILNX4DkWlG5o88OfwU2ijMLIv-YnHJY9DW1if7gH9sH1Y0udJlWuvXF2PTgQntblyni52cC0ptWc5i9rME2L3DxaRvkukxRUYr8aZhK8k4J6gDsKUh9NsfaO0ufEpnxHzf30hGwwDZfy_VX_3k5WM_XlOn0pChPSnPL_V0X51KMORzx_S0DU2oSzalBc7XlyxQ8vsnVLXjtW1MIwAeGjAxJYov2DEoh67zpInWnc43QEclb1qzL6CgG4QxWSZ-VP8mA9t4emyupZZwMVnFAdbcZF1Lrbx2LmehK31VHhbaKklurt2IaXEdAHoCpm-OG84b_JH_IdDQ3Sf6xrV1-3z7RRElXQmrjtmTay5i4R6n7N6m5276SJaSwjIfdjy1DR5Lt6xKdArWpGz30BxWsacSzo6mM5DCUy-FiePLxikJ8_djvO5RIR3_QL-S3hxRQo1c_fv2g2OW5bWw2yciKfr0p9VdhLSNs88faw=s200-no?authuser=4',
          }}
        />
        <Text style={styles.userName}>
          {userData ? userData.fname || 'Test' : 'Test'}{' '}
          {userData ? userData.lname || 'User' : 'User'}
        </Text>
        {/* <Text>{route.params ? route.params.userId : user.uid}</Text> */}
        <Text style={styles.aboutUser}>
          {userData ? userData.about || 'No details added' : ''}
        </Text>

        <View style={styles.userBtnWrapper}>
          {route.params ? (
            <>
              {/* <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
                <Text style={styles.userBtnTxt}>Follow Profile</Text>
              </TouchableOpacity> */}
            </>
          ) : (
            <>
              <TouchableOpacity
                style={styles.userBtn}
                onPress={() => {
                  navigation.navigate('EditProfile');
                }}>
                <Text style={styles.userBtnTxt}>Edit Profile</Text>
              </TouchableOpacity>
              <Button
                style={styles.buttonU}
                onPress={() => {
                  navigation.navigate('MyTournament');
                }}
                title="My Tournament"
                color="#841584"
              />
            </>
          )}
        </View>

        <View style={styles.userBtnWrapper}>
          {route.params ? (
            <>
              {/* <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
                <Text style={styles.userBtnTxt}>Follow Profile</Text>
              </TouchableOpacity> */}
            </>
          ) : (
            <>
              {/* <Button
                style={styles.buttonU}
                onPress={() => {
                  navigation.navigate('Analysis');
                }}
                title="ANALYSIS"
                color="#841584"
              /> */}
              {/* <TouchableOpacity
                style={styles.userBtn}
                onPress={() => {
                  navigation.navigate('Achievement');
                }}>
                <Text style={styles.userBtnTxt}>Acheivement</Text>
              </TouchableOpacity> */}
            </>
          )}
        </View>

        {/* <Button
          style={styles.ButtonU}
          onPress={() => {
            navigation.navigate('MyMatches');
          }}
          title="MY MATCHES"
          color="#841584"
        /> */}

        {/* <Button
          style={styles.ButtonU}
          onPress={() => {
            navigation.navigate('MyTeams');
          }}
          title="MY TEAMS"
          color="#841584"
        /> */}

        {/* {posts.map(item => (
          <PostCard key={item.id} item={item} onDelete={handleDelete} />
        ))} */}
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  aboutUser: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  userBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
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
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  userInfoItem: {
    justifyContent: 'center',
  },
  userInfoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  userInfoSubTitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  buttonU: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 5,
  },
});
