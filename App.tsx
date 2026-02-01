import React from 'react';
import AppProvider from './src/AppProvider';
import RootNavigator from './src/navigation/RootNavigator';
import { enableScreens } from 'react-native-screens';

enableScreens();


export default function App() {
  return (
    <AppProvider>
      <RootNavigator />
    </AppProvider>
  );
}
