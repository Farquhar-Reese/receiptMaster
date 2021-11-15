import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Switch } from 'react-native';
import { Container, Content } from "native-base";
import dataJson from "../../data.json"
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import styles from "./styles";
import Colors from "../../Constants/Colors"
import { themes } from '../../Constants/darkModeTheme';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props: Props) {
    tempArr = [];
    dataJson.map((key, index) => {
      tempArr[index] = { ["day" + index]: true };
    });
    //need to define all elements in the array inside of the constructor state
    super(props);
    this.state = {
      //figure out how to do this
      switchValues: {},
      switch1ValuePushNotifications: true,
      switch1ValueSMSNotifications: true
    };

    console.log("State = ", this.state);
    this.toggleNotificationsSwitch = this.toggleNotificationsSwitch.bind(this);
  }

  togglePushNotificationsSwitch = value => {
    this.setState({ switch1ValuePushNotifications: value });
  };
  toggleSMSNotificationsSwitch = value => {
    this.setState({ switch1ValueSMSNotifications: value });
  };
  //this method is broken...
  toggleNotificationsSwitch(item) {
    console.log(
      "this.state[day + (item._ID - 1)] = ",
      this.state["day" + (item._ID - 1)]
    );
    console.log("this.state", this.state);
    let val = !this.state["day" + (item._ID - 1)];

    this.setState({ ["day" + (item._ID - 1)]: val });
  }

  render() {
    const navigation = this.props.navigation;
    
    return (
      <Container style = {styles.container}>
        <Content>
          <View>
            {/**
             * <Text style={styles.HeaderTxt}>General</Text>
            <View style={styles.line}></View>
            <TouchableOpacity
              style={styles.listTxtContainer}
              onPress={() =>
                this.props.navigation.navigate("ChangeUserData", {
                  purpose: "Password",
                  placeholderTxtArr: [
                    "Current passoword",
                    "New passoword",
                    "Confirm new passoword"
                  ],
                  multilines: false,
                  submitTxt: "Save"
                })
              }
            >
              <Text style={styles.listTxt}>Password</Text>
              <Ionicons
                name={
                  Platform.OS === "ios"
                    ? "ios-arrow-forward"
                    : "md-arrow-forward"
                }
                size={20}
                color={"gray"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.listTxtContainer}
              onPress={() =>
                this.props.navigation.navigate("ChangeUserData", {
                  purpose: "Email",
                  placeholderTxtArr: ["New email"],
                  multilines: false,
                  submitTxt: "Confirm new email"
                })
              }
            >
              <Text style={styles.listTxt}>Email</Text>
              <Ionicons
                name={
                  Platform.OS === "ios"
                    ? "ios-arrow-forward"
                    : "md-arrow-forward"
                }
                size={20}
                color={"gray"}
              />
            </TouchableOpacity>
             */}
            <Text style={styles.HeaderTxt}>Notifications</Text>
            <View style={styles.line}></View>
            <View style={styles.listTxtContainer}>
              <Text style={styles.listTxt}>Push Notifications</Text>
              <Switch
                onValueChange={this.togglePushNotificationsSwitch}
                value={this.state.switch1ValuePushNotifications}
                trackColor={{
                  true: Colors.tintColor,
                  false: null
                }}
              />
            </View>
            <Text style={styles.HeaderTxt}>Privacy</Text>
            <View style={styles.line}></View>
            <TouchableOpacity
              style={styles.listTxtContainer}
              onPress={() => {
                WebBrowser.openBrowserAsync(
                  "http://branda.app/privacyPolicy.html"
                );
              }}
            >
              <Text style={styles.listTxt}>Privacy Policy</Text>
              <Ionicons
                name={
                  Platform.OS === "ios"
                    ? "ios-arrow-forward"
                    : "md-arrow-forward"
                }
                size={20}
                color={"gray"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.listTxtContainer}
              onPress={() => {
                WebBrowser.openBrowserAsync(
                  "http://branda.app/TermsOfService.html"
                );
              }}
            >
              <Text style={styles.listTxt}>Terms and Conditions</Text>
              <Ionicons
                name={
                  Platform.OS === "ios"
                    ? "ios-arrow-forward"
                    : "md-arrow-forward"
                }
                size={20}
                color={"gray"}
              />
            </TouchableOpacity>
            <Text style={styles.HeaderTxt}>About</Text>
            <View style={styles.line}></View>
            <TouchableOpacity
              style={styles.listTxtContainer}
              onPress={() =>
                this.props.navigation.navigate("About")
              }
            >
              <Text style={styles.listTxt}>About Us</Text>
              <Ionicons
                name={
                  Platform.OS === "ios"
                    ? "ios-arrow-forward"
                    : "md-arrow-forward"
                }
                size={20}
                color={"gray"}
              />
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }

}

