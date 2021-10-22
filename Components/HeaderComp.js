import React from "react";
import {Ionicons} from "@expo/vector-icons";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Left,
  Header
} from "react-native";
import styles from "./styles";

/*import Colors from "../../constants/Colors";
import TabBarIcon from "../TabBarIcon";
*/


class HeaderComp extends React.Component {
  constructor(props) {
    super(props);
  }

  BackArrowPresence() {
    if (!this.props.subPageTrue) {
      return styles.hideDisplay;
    }
    return null;
  }

  render() {
    return (
      <View style={styles.headerView}>
        <TouchableOpacity
          style={[styles.backArrowBut, this.BackArrowPresence()]}
          onPress={() =>
            this.props.myNav.navigate(this.props.backArrowLocation)
          }
        >
          <Ionicons
            name={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
            size={26}
            style={{ marginBottom: -3 }}
            color={"#fff"}
          />
        </TouchableOpacity>
        <View style={styles.headerView4Text}>
          <Text style={styles.headerText}>{this.props.titleTxt}</Text>
        </View>
      </View>
    );
  }
}

export default class headBar extends React.Component {
  render() {
    return (
      <HeaderComp
        titleTxt={this.props.titleTxt}
        myNav={this.props.myNav}
        backArrowLocation={this.props.prevPg}
        subPageTrue={this.props.subPage}
      />
    );
  }
}