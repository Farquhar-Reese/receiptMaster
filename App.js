import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as Updates from "expo-updates";
import { StyleSheet, Text, View, Appearance } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";/*may have to get this from react-navigation as well*/
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IonIcons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./Screens/HomeScreen/index";
import PurchasesScreen from "./Screens/ItemsScreen/index";
import SettingsScreen from "./Screens/SettingsScreen/index";
import PictureScreen from "./Screens/HomeScreen/pictureProcessing"; /*Actually create a sub page for the home page and include its link here!!!*/
import ReceiptDetailsScreen from "./Screens/HomeScreen/receiptDetails"
import ItemDetailsScreen from "./Screens/ItemsScreen/detailsScreen"
import AboutScreen from "./Screens/SettingsScreen/about"
import Colors from "./Constants/Colors"
import { createStackNavigator } from '@react-navigation/stack';
import {ThemeContext, themes} from './Constants/darkModeTheme';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreenSubPageNavigation}
        options={{
          tabBarLabel: ({ focused, color, size }) => (
            <Text style={{color:focused?Colors.tintColor:"#A9A9A9", fontSize: 11}}> Add </Text>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons name="camera" color={focused ? Colors.tintColor : "#A9A9A9"} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={PurchasesScreenSubPageNavigation}
        options={{
          tabBarLabel: ({ focused, color, size }) => (
            <Text style={{color:focused?Colors.tintColor:"#A9A9A9", fontSize: 11}}> Purchases </Text>
          ),
          tabBarIcon: ({focused, color, size }) => (
            <IonIcons name="receipt-outline" color={focused ? Colors.tintColor : "#A9A9A9"} size={size} />
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

function PurchasesScreenSubPageNavigation() {
  return (
      <Stack.Navigator>
        
        <Stack.Screen name="Index" 
        component={PurchasesScreen} 
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
    <ThemeContext.Provider value = {Appearance.getColorScheme()}>
      <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
    </ThemeContext.Provider>
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
