import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element';

const Details = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // Animated values
  const translateY = new Animated.Value(0);
  const opacity = new Animated.Value(0);

  useEffect(() => {
    // Start the entrance animation
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <SharedElement id={'make' + route.params.make}>
              <Animated.Text
                style={[
                  styles.animatedText,
                  {
                    transform: [
                      {
                        translateY: translateY.interpolate({
                          inputRange: [0, 1],
                          outputRange: [50, 0],
                        }),
                      },
                    ],
                    opacity: opacity,
                  },
                ]}>
                {route.params.image.make}
              </Animated.Text>
            </SharedElement>
            <SharedElement id={'model' + route.params.model}>
              <Animated.Text
                style={[
                  styles.animatedText,
                  {
                    transform: [
                      {
                        translateY: translateY.interpolate({
                          inputRange: [0, 1],
                          outputRange: [50, 0],
                        }),
                      },
                    ],
                    opacity: opacity,
                  },
                ]}>
                {route.params.image.model}
              </Animated.Text>
            </SharedElement>
          </View>
          <Animated.View style={{opacity: opacity}}>
            <View>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  style={{height: 20, width: 20, margin: 20}}
                  source={require('../assets/close.png')}
                />
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
        <SharedElement id={'image' + route.params.image.id}>
          <Image source={route.params.image.image} resizeMode="cover" />
        </SharedElement>
        <Animated.View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            opacity: opacity,
            transform: [
              {
                translateX: translateY.interpolate({
                  inputRange: [0, 1],
                  outputRange: [50, 0],
                }),
              },
            ],
          }}>
          <Animated.Text style={{fontSize: 20, fontWeight: '600'}}>
            Get a free service
          </Animated.Text>
          <Animated.Image
            style={{height: 30, width: 30}}
            source={require('../assets/arrow.png')}
          />
        </Animated.View>

        <Animated.View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            opacity: opacity,
            transform: [
              {
                translateX: translateY.interpolate({
                  inputRange: [0, 1],
                  outputRange: [50, 0],
                }),
              },
            ],
          }}>
          <Animated.Text style={{fontSize: 20, fontWeight: '600'}}>
            Save 10% and buy now!
          </Animated.Text>
          <Animated.Image
            style={{height: 30, width: 30}}
            source={require('../assets/arrow.png')}
          />
        </Animated.View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  animatedText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '800',
    marginLeft: 20,
    marginTop: 10,
  },
});

export default Details;
