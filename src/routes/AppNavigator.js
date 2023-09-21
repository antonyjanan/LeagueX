import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Home from '../screens/Home';
import Details from '../screens/Details';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: 'transparent' },
          ...TransitionPresets.SlideFromRightIOS, // Apply sliding transition
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            cardStyleInterpolator: ({ current, layouts }) => {
              return {
                cardStyle: {
                  transform: [
                    {
                      scale: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.8, 1], // Scale from 80% to 100%
                      }),
                    },
                  ],
                },
              };
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
