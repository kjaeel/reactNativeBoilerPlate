import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { AuthContext } from '../context/AuthContext';

export default function CustomDrawerContent(props: any) {
  const { user, logout } = useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ padding: 16 }}>
        <Text>{user?.email}</Text>
      </View>
      <DrawerItemList {...props} />
      <TouchableOpacity onPress={logout} style={{ padding: 16 }}>
        <Text style={{ color: 'red' }}>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}
