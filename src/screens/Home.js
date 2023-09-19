import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  Animated,
  Dimensions,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

const {height, width} = Dimensions.get('window');
const Item_Height = height * 0.2;
const Item_Width = width * 0.4;
const Home = ({navigation}) => {
  const [data, setData] = useState([
    {
      id: 0,
      make: 'Audi',
      model: 'X',
      year: 2022,
      image: require('../assets/audi.png'),
    },
    {
      id: 1,
      make: 'Bentley',
      model: 'X',
      year: 2022,
      image: require('../assets/Betley.jpg'),
    },
    {
      id: 2,
      make: 'cadillac',
      model: 'XTS',
      year: 2022,
      image: require('../assets/cadillac_XTS.jpg'),
    },
    {
      id: 3,
      make: 'Dodge',
      model: 'Dodge charger',
      year: 2021,
      image: require('../assets/Dodge.jpg'),
    },
    {
      id: 4,
      make: 'Ford',
      model: 'Mustang',
      year: 2021,
      image: require('../assets/Ford_mustang_GT.jpg'),
    },
    {
      id: 5,
      make: 'Jaguar',
      model: 'Z',
      year: 2021,
      image: require('../assets/Jaguar.jpg'),
    },
    {
      id: 6,
      make: 'Martin',
      model: 'M',
      year: 2021,
      image: require('../assets/Martin.jpg'),
    },
    {
      id: 7,
      make: 'mitsubishi',
      model: 'lancer',
      year: 2021,
      image: require('../assets/mitsubishi_lancer.jpg'),
    },
    {
      id: 8,
      make: 'Nissan',
      model: 'GTR',
      year: 2021,
      image: require('../assets/Nissan_GTR.jpg'),
    },
    {
      id: 9,
      make: 'Mahindra',
      model: 'Thar',
      year: 2021,
      image: require('../assets/Thar.jpg'),
    },
  ]);
  return (
    <View style={{flex: 1}}>
      <FlatList
        style={{
          paddingVertical: 10,
          paddingHorizontal: 10,
          flex: 1,
        }}
        data={data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                width: width,
                marginBottom: 10,
                backgroundColor: '#e6e6e6',
                borderRadius: 30,
              }}
              opa
              onPress={() => {
                navigation.navigate('Details', {image: item});
              }}>
              <SharedElement id={'image' + item.id}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flex: 1,
                  }}>
                  <View style={{flexDirection: 'column'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 16,
                        fontWeight: '800',
                        marginLeft: 20,
                        marginTop: 10,
                      }}>
                      {item.make}
                    </Text>
                    <Text
                      style={{fontSize: 14, fontWeight: '500', marginLeft: 20}}>
                      {item.model}
                    </Text>
                  </View>
                  <View>
                    <Image
                      source={item.image}
                      style={{
                        width: Item_Width,
                        height: Item_Height,
                        margin: 20,
                      }}
                      resizeMode="cover"
                    />
                  </View>
                </View>
              </SharedElement>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Home;
