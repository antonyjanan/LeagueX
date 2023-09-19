import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import {SharedElement} from 'react-navigation-shared-element';

const Details = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <SharedElement id={'make' + route.params.make}>
              <Animatable.Text
                animation={'slideInRight'}
                duration={800}
                style={{
                  color: 'black',
                  fontSize: 20,
                  fontWeight: '800',
                  marginLeft: 20,
                  marginTop: 10,
                }}>
                {route.params.image.make}
              </Animatable.Text>
            </SharedElement>
            <SharedElement id={'model' + route.params.model}>
              <Animatable.Text
                animation={'slideInRight'}
                duration={1000}
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  marginLeft: 20,
                  marginTop: 10,
                }}>
                {route.params.image.model}
              </Animatable.Text>
            </SharedElement>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Animatable.Image
                style={{height: 20, width: 20, margin: 20}}
                animation={'zoomIn'}
                source={require('../assets/close.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <SharedElement id={'image' + route.params.image.id}>
          <Image source={route.params.image.image} resizeMode="cover" />
        </SharedElement>
        <Animatable.View
          duration={600}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Animatable.Text
            animation={'slideInRight'}
            duration={1000}
            style={{fontSize: 20, fontWeight: '600'}}>
            Get a free service
          </Animatable.Text>
          <Animatable.Image
            animation={'zoomInRight'}
            style={{height: 30, width: 30}}
            source={require('../assets/arrow.png')}
          />
        </Animatable.View>
        <Animatable.View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Animatable.Text
            animation={'slideInRight'}
            style={{fontSize: 20, fontWeight: '600'}}>
            Save 10% and buy now!
          </Animatable.Text>
          <Animatable.Image
            animation={'slideInRight'}
            style={{height: 30, width: 30}}
            source={require('../assets/arrow.png')}
          />
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
