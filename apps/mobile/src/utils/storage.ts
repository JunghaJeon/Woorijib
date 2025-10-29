import AsyncStorage from '@react-native-async-storage/async-storage';
import { MMKV } from 'react-native-mmkv';
import { APP_CONFIG } from '@constants/config';

// MMKV for fast synchronous storage
export const mmkvStorage = new MMKV();

/**
 * AsyncStorage를 사용한 비동기 저장
 */
export const setToken = async (key: string, value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error('Error saving token:', error);
    throw error;
  }
};

export const getToken = async (key: string): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.error('Error getting token:', error);
    return null;
  }
};

export const removeToken = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing token:', error);
    throw error;
  }
};

export const clearTokens = async (): Promise<void> => {
  try {
    await AsyncStorage.multiRemove([
      APP_CONFIG.STORAGE_KEYS.AUTH_TOKEN,
      APP_CONFIG.STORAGE_KEYS.REFRESH_TOKEN,
    ]);
  } catch (error) {
    console.error('Error clearing tokens:', error);
    throw error;
  }
};

/**
 * MMKV를 사용한 동기 저장 (빠른 읽기/쓰기)
 */
export const setItem = (key: string, value: string): void => {
  mmkvStorage.set(key, value);
};

export const getItem = (key: string): string | undefined => {
  return mmkvStorage.getString(key);
};

export const setObject = <T>(key: string, value: T): void => {
  mmkvStorage.set(key, JSON.stringify(value));
};

export const getObject = <T>(key: string): T | null => {
  const value = mmkvStorage.getString(key);
  return value ? JSON.parse(value) : null;
};

export const removeItem = (key: string): void => {
  mmkvStorage.delete(key);
};

export const clearAll = (): void => {
  mmkvStorage.clearAll();
};

