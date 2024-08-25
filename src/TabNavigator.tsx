import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import HomeScreen from '../screens/HomeScreen';
// import SettingsScreen from '../screens/SettingsScreen';
// import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        // screenOptions={({ route }) => ({
        //   tabBarIcon: ({ focused, color, size }) => {
        //     let iconName: string = '';
        //     if (route.name === 'Home') {
        //       iconName = focused ? 'home' : 'home-outline';
        //       console.log("iconName1", iconName)
        //     } else if (route.name === 'Settings') {
        //       iconName = focused ? 'settings' : 'settings-outline';
        //       console.log("iconName2", iconName)
        //     } else if (route.name === 'Profile') {
        //       iconName = focused ? 'person' : 'person-outline';
        //       console.log("iconName3", iconName)
        //     }

        //     // You can return any component that you like here!
        //     return <Ionicons name={iconName} size={size} color={color} />;
        //   },
        //   tabBarActiveTintColor: '#2f95dc',
        //   tabBarInactiveTintColor: 'gray',
        //   headerShown: true,
        // })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={HomeScreen} />
        <Tab.Screen name="Profile" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
