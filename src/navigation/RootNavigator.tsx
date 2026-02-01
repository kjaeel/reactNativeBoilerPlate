import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import AuthStack from './AuthStack';
import DrawerNavigator from './DrawerNavigator';
import Ionicons from '@react-native-vector-icons/ionicons';

export default function RootNavigator() {
  const { token, isLoading } = useContext(AuthContext);
  if (isLoading) return null;
  return (
    <NavigationContainer>
      {token ? <DrawerNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
}
