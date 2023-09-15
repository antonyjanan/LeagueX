import React, {useEffect, useRef} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from 'react-native';

const ModalImage = ({image, closeModal}) => {
  const scaleValue = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
        {/* Add a close button or icon */}
      </TouchableOpacity>
      <Animated.View
        style={[styles.imageContainer, {transform: [{scale: scaleValue}]}]}>
        <Image source={image} style={styles.image} resizeMode="contain" />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
    // Add styles for your close button or icon
  },
  imageContainer: {
    width: '80%',
    aspectRatio: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
  },
});

export default ModalImage;
