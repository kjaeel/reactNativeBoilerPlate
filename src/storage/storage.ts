import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveItem = async <T>(key: string, value: T) =>
  AsyncStorage.setItem(key, JSON.stringify(value));

export const getItem = async <T>(key: string): Promise<T | null> => {
  const value = await AsyncStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

export const removeItem = async (key: string) =>
  AsyncStorage.removeItem(key);
