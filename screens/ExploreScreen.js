// import {
//   Body,
//   Button,
//   Container,
//   Content,
//   Header,
//   Icon,
//   Input,
//   Item,
//   Left,
//   ListItem,
//   Right,
//   Text,
//   Thumbnail,
//   Title,
// } from 'native-base';
// import React, {useEffect, useState} from 'react';
// import firestore from '@react-native-firebase/firestore';
// import {AuthContext1} from '../navigation/AuthProvider';
// import {Component} from 'react';
// import {FlatList} from 'react-native';
// import _ from 'lodash';
// let helperArray = require('../components/testList.json');

// import SearchUser from '../components/SearchUser';

// export default class ExploreScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       allUsers: helperArray,
//       userFiltered: helperArray,
//     };
//   }

//   searchUser = text => {
//     const formattedQuery = text.toLowerCase();
//     const allUsers = _.filter(this.state.userFiltered, photo => {
//       if (
//         photo.name.toLocaleLowerCase().includes(formattedQuery.toLowerCase())
//       ) {
//         return true;
//       }
//       return false;
//     });
//     this.setState({allUsers, query: text});
//   };

//   render() {
//     return (
//       <Container>
//         <Header searchBar rounded>
//           <Item>
//             <Icon name="search" />
//             <Input placeholder="Search Player" onChangeText={this.searchUser} />
//           </Item>
//         </Header>

//         <FlatList
//           data={this.state.allUsers}
//           renderItem={({item}) => <SearchUser item={item} />}
//           keyExtractor={item => item.name}
//         />
//       </Container>
//     );
//   }
// }

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
import {FlatList} from 'react-native';
import _ from 'lodash';
let helperArray = require('../components/testList.json');

import SearchUser from '../components/SearchUser';

export default function ExploreScreen(props, {navigation}) {
  const [allUsers, setallUsers] = useState(null);
  const [userFiltered, setuserFiltered] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const list = [];

      await firestore()
        .collection('users')
        .get()
        .then(querySnapshot => {
          // console.log('Total users: ', querySnapshot.size);

          querySnapshot.forEach(doc => {
            const {fname, lname, phone, userImg} = doc.data();
            list.push({
              fname,
              lname,
              phone,
              userImg:
                'https://lh3.googleusercontent.com/Aj-96fDgExPme9DKq82az4XR9SzsQo4X1PnFYOJPjWOx50C5eDjMIdYGB2jCWeAvzEw-x9RFP33mcp_A-IhiqKo_J8orEpqweXOzJDL_pQelB3J2_mH8OttSd4AkNueHt7ehk0s9p43-2frHmEEpK2j1axKitATMe696wqsI_Srbz7kyrTA6t39eMoOiX3y2Nn_h972FxglhkajqLES-Pqbzh8qWtXJrJW7yk-VBFsD37RJCopILNX4DkWlG5o88OfwU2ijMLIv-YnHJY9DW1if7gH9sH1Y0udJlWuvXF2PTgQntblyni52cC0ptWc5i9rME2L3DxaRvkukxRUYr8aZhK8k4J6gDsKUh9NsfaO0ufEpnxHzf30hGwwDZfy_VX_3k5WM_XlOn0pChPSnPL_V0X51KMORzx_S0DU2oSzalBc7XlyxQ8vsnVLXjtW1MIwAeGjAxJYov2DEoh67zpInWnc43QEclb1qzL6CgG4QxWSZ-VP8mA9t4emyupZZwMVnFAdbcZF1Lrbx2LmehK31VHhbaKklurt2IaXEdAHoCpm-OG84b_JH_IdDQ3Sf6xrV1-3z7RRElXQmrjtmTay5i4R6n7N6m5276SJaSwjIfdjy1DR5Lt6xKdArWpGz30BxWsacSzo6mM5DCUy-FiePLxikJ8_djvO5RIR3_QL-S3hxRQo1c_fv2g2OW5bWw2yciKfr0p9VdhLSNs88faw=s200-no?authuser=4',
            });
          });
        });

      setUser(list);
      setallUsers(list);
      setuserFiltered(list);

      if (loading) {
        setLoading(false);
      }

      // console.log('Users:', list);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUser();
    props.navigation.addListener('focus', () => setLoading(!loading));
  }, [navigation, loading]);

  const searchUser = text => {
    const formattedQuery = text.toLowerCase();
    const allUsers = _.filter(userFiltered, photo => {
      if (
        photo.fname
          .toLocaleLowerCase()
          .includes(formattedQuery.toLowerCase()) ||
        photo.lname.toLocaleLowerCase().includes(formattedQuery.toLowerCase())
      ) {
        return true;
      }
      return false;
    });
    setallUsers(allUsers, text);
  };

  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="search" />
          <Input placeholder="Search Player" onChangeText={searchUser} />
        </Item>
      </Header>

      <FlatList
        data={allUsers}
        renderItem={({item}) => <SearchUser item={item} />}
        keyExtractor={item => item.fname}
      />
    </Container>
  );
}
