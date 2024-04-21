import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons"
import HomeScreen from './src/pages/HomeScreen';
import ShopScreen from './src/pages/ShopScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TasksScreen from './src/pages/TasksScreen';

const Tab = createBottomTabNavigator();

class App extends Component {

  render() {
    return (
      <NavigationContainer>
      <Tab.Navigator
        // set screenOptions to specify how the navbar should work
        screenOptions={({ route }) => ({

          // tabBarIcon is an object with values assigned based on the route name
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Tasks') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Shop') {
              iconName = focused ? 'storefront' : 'storefront-outline';
            }



            // return any component that you want to display here for the navbar item
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Tasks" component={TasksScreen} />
        <Tab.Screen name="Shop" component={ShopScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
});

export default App;