import React, { useContext } from 'react';
import { View, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen() {
  const { login } = useContext(AuthContext);
  return (
    <View>
      <Button title="Login" onPress={() => login('test@test.com', '123456')} />
    </View>
  );
}
