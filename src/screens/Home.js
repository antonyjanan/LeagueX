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
import Details from './src/screens/Details';
import {Card} from 'react-native-elements';
import { SharedElement } from 'react-navigation-shared-element';

const{height,width}=Dimensions.get('window');
const Home = ({navigation}) => {
    const [data,setData] = useState([ {
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
      },])
  return (
    <View style={{flex: 1}}>
            <FlatList data={data}
            renderItem={({item,index})=>{
                return(
                    <TouchableOpacity 
                    style={{
                        width:width,
                        marginBottom:10,
                        backgroundColor:"white",
                        flexDirection:'row',
                        alignItems:'center'
                        }}
                         onPress={
                            ()=>{
                                navigation.navigate('Details',{image:item})}}>
                <SharedElement id={'image'+item.id}>
                    <Image source={item.image}
                    style={{width:100,
                    alignSelf:'flex-start',
                height:100,
            margin:20
        }}
        resizeMode='cover'/>
        <Text style={{fontSize:16,fontWeight:'600',marginLeft:20}}>{'Shoes'+(index+1)}</Text>
                </SharedElement>
                </TouchableOpacity>
                )
            }}
            />

    </View>
  );
};

export default Home;
