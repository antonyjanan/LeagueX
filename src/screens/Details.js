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
              {route.params.item.make}
            </Animated.Text>
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
              {route.params.item.model}
            </Animated.Text>
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
        <Animated.Image
          source={route.params.item.image}
          resizeMode="cover"
          style={{
            opacity: opacity,
            transform: [
              {
                translateY: translateY.interpolate({
                  inputRange: [0, 1],
                  outputRange: [50, 0],
                }),
              },
            ],
          }}
        />
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
          <Animated.Image
            style={styles.animatedColors}
            source={require('../assets/block-red.jpg')}
          />
          <Animated.Image
            style={styles.animatedColors}
            source={require('../assets/Dark-blue.jpg')}
          />
          <Animated.Image
            style={styles.animatedColors}
            source={require('../assets/Dark-blue.jpg')}
          />
          <Animated.Image
            style={styles.animatedColors}
            source={require('../assets/Dark-green.jpg')}
          />
          <Animated.Image
            style={styles.animatedColors}
            source={require('../assets/orange.jpg')}
          />
          <Animated.Image
            style={styles.animatedColors}
            source={require('../assets/pink.jpg')}
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
  animatedColors: {
    marginTop: 10,
    height: 40,
    width: 40,
    borderRadius: 10,
  },
});

export default Details;
