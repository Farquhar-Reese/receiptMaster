import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import HomeScreen from "../Screens/HomeScreen/index"

const HomeStack = createStackNavigator({
    Home: HomeScreen
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