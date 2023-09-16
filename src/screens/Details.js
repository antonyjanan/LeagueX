import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable'

const Details = () => {
  const route=useRoute();
  return (
    <View style={{flex:1}}>
      <SharedElement id={'image'+route.params.image.id}>
        <Image source={route.params.image.image} style={{width:'100%',height:400}} resizeMode="cover"/>
      </SharedElement>
      <Animatable.View animation={'slideInUp'} duration={600} style={{backgroundColor:"#fff",elevation:5,width:'90%',alignSelf:'center',borderRadius:20,padding:20}}>
      <Animatable.Text animation={'slideInUp'} duration={800} style={{fontSize:20,fontWeight:'600',margin:10}}>Details</Animatable.Text>
      <Animatable.Text animation={'slideInUp'} duration={1000} style={{fontSize:20,fontWeight:'600',margin:10}}>{"Details"}</Animatable.Text>
      </Animatable.View>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})