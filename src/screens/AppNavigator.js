import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import Details from './Details';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import Home from './Home';

const Stack = createSharedElementStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
     <Stack.Screen name="Home" component={Home} />
     <Stack.Screen name="Details" 
     component={Details} 
     SharedElements={(route,otherRoute,showing)=>
     { const {image}=route.params;
      return[`image`+image.id];
      }} 
      options={{headerShown:false}}
      />
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})