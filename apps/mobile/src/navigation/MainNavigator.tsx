import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '@screens/home/HomeScreen';
import QuestionsScreen from '@screens/questions/QuestionsScreen';
import PetScreen from '@screens/pet/PetScreen';
import FamilyScreen from '@screens/family/FamilyScreen';

import { colors, spacing } from '@constants/theme';

export type MainTabParamList = {
  Home: undefined;
  Questions: undefined;
  Pet: undefined;
  Family: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'home';

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Questions':
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
              break;
            case 'Pet':
              iconName = focused ? 'paw' : 'paw-outline';
              break;
            case 'Family':
              iconName = focused ? 'people' : 'people-outline';
              break;
          }

          return (
            <View style={styles.iconContainer}>
              <Icon name={iconName} size={size} color={color} />
              {focused && <View style={[styles.activeIndicator, { backgroundColor: color }]} />}
            </View>
          );
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopWidth: 1,
          borderTopColor: colors.border,
          paddingBottom: spacing.sm,
          paddingTop: spacing.sm,
          height: 70,
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginTop: 4,
        },
        tabBarItemStyle: {
          paddingVertical: 4,
        },
      })}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ 
          tabBarLabel: '홈',
          tabBarBadge: undefined,
        }} 
      />
      <Tab.Screen 
        name="Questions" 
        component={QuestionsScreen} 
        options={{ 
          tabBarLabel: '질문',
          tabBarBadge: 3, // 답변 대기 중인 질문 수
        }} 
      />
      <Tab.Screen 
        name="Pet" 
        component={PetScreen} 
        options={{ 
          tabBarLabel: '우리펫',
        }} 
      />
      <Tab.Screen 
        name="Family" 
        component={FamilyScreen} 
        options={{ 
          tabBarLabel: '우리가족',
        }} 
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIndicator: {
    width: 4,
    height: 4,
    borderRadius: 2,
    marginTop: 2,
  },
});

export default MainNavigator;

