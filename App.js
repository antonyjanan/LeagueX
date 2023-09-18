import React from 'react';
import {Text, View} from 'react-native';
import AppNavigator from './src/routes/AppNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
};

export default App;
