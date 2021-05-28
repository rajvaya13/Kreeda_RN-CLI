import React, {useContext, useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
} from 'react-native';
import PostCard from '../components/PostCard';
import {AuthContext1} from '../navigation/AuthProvider';
import {UserImg} from '../styles/Screen1Styles';
import firestore from '@react-native-firebase/firestore';

function MyTournament({navigation}) {
  const {user} = useContext(AuthContext1);
  const [tournamentPost, setTournament] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTournament = async () => {
    try {
      const list = [];

      await firestore()
        .collection('tournamentPost')
        .where('userId', '==', user.uid)
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
    fetchTournament();
    navigation.addListener('focus', () => setLoading(!loading));
  }, [navigation, loading]);

  const handleDelete = () => {};

  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          navigation.navigate('AddTournament');
        }}
        title="CREATE TOURNAMENT"
        color="#841584"
      />

      <Button
        onPress={() => {
          navigation.navigate('SportScreen');
        }}
        title="Sports"
        color="#841584"
      />

      {tournamentPost.map(item => (
        <PostCard key={item.id} item={item} onDelete={handleDelete} />
      ))}
    </View>
  );
}

export default MyTournament;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
