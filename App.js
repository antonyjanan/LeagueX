import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  Animated,
} from 'react-native';
import ModalImage from './src/screens/ModalImage';
import {Card} from 'react-native-elements';

const data = [
  {
    id: 1,
    make: 'Bentley',
    model: 'X',
    year: 2022,
    image: require('./src/assets/Betley.jpg'),
  },
  {
    id: 2,
    make: 'cadillac',
    model: 'XTS',
    year: 2022,
    image: require('./src/assets/cadillac_XTS.jpg'),
  },
  {
    id: 3,
    make: 'Dodge',
    model: 'Dodge',
    year: 2021,
    image: require('./src/assets/Dodge.jpg'),
  },
  {
    id: 4,
    make: 'Ford',
    model: 'Mustang',
    year: 2021,
    image: require('./src/assets/Ford_mustang_GT.jpg'),
  },
  {
    id: 5,
    make: 'Jaguar',
    model: 'Z',
    year: 2021,
    image: require('./src/assets/Jaguar.jpg'),
  },
  {
    id: 6,
    make: 'Martin',
    model: 'M',
    year: 2021,
    image: require('./src/assets/Martin.jpg'),
  },
  {
    id: 7,
    make: 'mitsubishi',
    model: 'lancer',
    year: 2021,
    image: require('./src/assets/mitsubishi_lancer.jpg'),
  },
  {
    id: 8,
    make: 'Nissan',
    model: 'GTR',
    year: 2021,
    image: require('./src/assets/Nissan_GTR.jpg'),
  },
  {
    id: 9,
    make: 'Mahindra',
    model: 'Thar',
    year: 2021,
    image: require('./src/assets/Thar.jpg'),
  },
];

const CarListScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const showImage = image => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => showImage(item.image)}>
            <Card>
              <Animated.Text>{item.make}</Animated.Text>
              <Image source={item.image} style={{width: 200, height: 100}} />
            </Card>
          </TouchableOpacity>
        )}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <ModalImage
          image={selectedImage}
          closeModal={() => setModalVisible(false)}
        />
      </Modal>
    </View>
  );
};

export default CarListScreen;
