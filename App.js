import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as Updates from "expo-updates";
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";/*may have to get this from react-navigation as well*/
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "./Screens/HomeScreen/index";
import SearchScreen from "./Screens/ItemsScreen/index";
import SettingsScreen from "./Screens/SettingsScreen/index";
import PictureScreen from "./Screens/HomeScreen/pictureProcessing"; /*Actually create a sub page for the home page and include its link here!!!*/
import ReceiptDetailsScreen from "./Screens/HomeScreen/receiptDetails"
import ItemDetailsScreen from "./Screens/ItemsScreen/detailsScreen"
import AboutScreen from "./Screens/SettingsScreen/about"
import Colors from "./Constants/Colors"
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreenSubPageNavigation}
        tabBarShowLabel={false}
        options={{
          tabBarLabel: ({ focused, color, size }) => (
            <Text style={{color:focused?Colors.tintColor:"#A9A9A9", fontSize: 11}}> Home </Text>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons name="camera" color={focused ? Colors.tintColor : "#A9A9A9"} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreenSubPageNavigation}
        options={{
          tabBarLabel: ({ focused, color, size }) => (
            <Text style={{color:focused?Colors.tintColor:"#A9A9A9", fontSize: 11}}> Search </Text>
          ),
          tabBarIcon: ({focused, color, size }) => (
            <MaterialCommunityIcons name="magnify" color={focused ? Colors.tintColor : "#A9A9A9"} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreenSubPageNavigation}
        options={{
          tabBarLabel: ({ focused, color, size }) => (
            <Text style={{color:focused?Colors.tintColor:"#A9A9A9", fontSize: 11}}> Settings </Text>
          ),
          tabBarIcon: ({focused, color, size }) => (
            <MaterialCommunityIcons name="cog" color={focused ? Colors.tintColor : "#A9A9A9"} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
/* Look Up how to disable default header on this subpage navigation stack! */
function HomeScreenSubPageNavigation() {
  return (
      <Stack.Navigator>
        
        <Stack.Screen name="Index" 
        component={HomeScreen} 
        options={{
          title: 'New Receipt',
          headerStyle: {
            backgroundColor: Colors.tintColor,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 23
          },
        }} />
        <Stack.Screen name="Picture" component={PictureScreen}
        options={{
          headerShown: false
        }}
        /> 
        <Stack.Screen name="ReceiptDetails" component={ReceiptDetailsScreen}
        options={{
          title: 'Receipt Details',
          headerStyle: {
            backgroundColor: Colors.tintColor,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 23
          },
        }}
        /> 
      </Stack.Navigator>


  )
}

function SearchScreenSubPageNavigation() {
  return (
      <Stack.Navigator>
        
        <Stack.Screen name="Index" 
        component={SearchScreen} 
        options={{
          title: 'Purchases',
          headerStyle: {
            backgroundColor: Colors.tintColor,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 23
          },
        }} />
        <Stack.Screen name="ItemDetails" component={ItemDetailsScreen}
        options={{
          title: 'Purchase Details',
          headerStyle: {
            backgroundColor: Colors.tintColor,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 23
          },
        }}
        /> 
      </Stack.Navigator>
  )
}

function SettingsScreenSubPageNavigation() {
  return (
      <Stack.Navigator>
        
        <Stack.Screen name="Index" 
        component={SettingsScreen} 
        options={{
          title: 'Settings',
          headerStyle: {
            backgroundColor: Colors.tintColor,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 23
          },
        }} />
        <Stack.Screen name="About" component={AboutScreen}
        options={{
          title: 'About',
          headerStyle: {
            backgroundColor: Colors.tintColor,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 23
          },
        }}
        /> 
      </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
