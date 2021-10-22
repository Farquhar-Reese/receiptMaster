import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import HomeScreen from "../Screens/HomeScreen/index"
import SearchScreen from "../Screens/HomeScreen/index"
import ItemScreen from "../Screens/HomeScreen/index"
import SettingsScreen from "../Screens/HomeScreen/index"
import PictureDetailsScreen from "../Screens/SettingsScreen/index"


/* 
IMPORTANT!!!!!!!!!!!!! CURRENTLY THIS NAVIGATION LAYOUT IS OUT DATED. THEREFORE THIS WHOLE FILE IS NOT BEING USED. 
To see the current in use navigator checkout App.js.
*/
const HomeStack = createStackNavigator({
    Home: HomeScreen,
    PictureDetails: PictureDetailsScreen,
    },
    {headerMode: "none"});
  
  HomeStack.navigationOptions = {
    tabBarLabel: "Home",
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === "ios" ? "ios-home" : "md-home"}
      />
    )
  };

  const SearchStack = createStackNavigator({
    Search: SearchScreen,
    Item: ItemScreen,
  });
  
  SearchStack.navigationOptions = {
    tabBarLabel: "Search",
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === "ios" ? "ios-person" : "md-person"}
      />
    )
  };

  const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
  });
  
  SettingsStack.navigationOptions = {
    tabBarLabel: "Settings",
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === "ios" ? "ios-person" : "md-person"}
      />
    )
  };

  export default createBottomTabNavigator(
    {
      HomeStack,
      SearchStack,
      SettingsStack
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
        }
      }),
      tabBarOptions: {
        activeTintColor: Colors.tintColor,
        inactiveTintColor: "gray"
      }
    }
  );