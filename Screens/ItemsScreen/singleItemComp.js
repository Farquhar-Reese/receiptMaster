import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image
  } from "react-native";
import styles from "./styles"


class ItemComp extends React.Component {
    static navigationOptions = {
      header: null
    };
    constructor(props: Props) {
      super(props);
      this.state = {
        listSelector: 0
      }
    }
  
    navigateToAcceptPg(nav) {
      let tempUserStat = "caddie";
      /*
      if (tempUserStat === "caddie") {
        nav.navigate("ReservationAcceptancePg", {
          peopleQuantity: this.props.data.partySize,
          date: this.props.data.date,
          time: this.props.data.time,
          clubName: this.props.data.clubName,
          avalibleLoop: this.props.avalibleLoopDisplay,
          clubEvent: this.props.clubEventDisplay
        });
      } else {
        nav.navigate("ReservationAcceptancePg", {
          peopleQuantity: this.props.data.partySize,
          date: this.props.data.date,
          time: this.props.data.time,
          clubName: this.props.data.clubName,
          avalibleLoop: this.props.avalibleLoopDisplay,
          clubEvent: this.props.clubEventDisplay
        });
      } 
      */
    }
    
  
    render() {
      const navigation = this.props.navigation;
      return (
        <TouchableOpacity
        style={
          this.props.index
            ? styles.compBackground
            : styles.compBacgroundAlt
        }
        onPress={() => this.navigateToAcceptPg(navigation)}
      >
          <View style={styles.leftContainer}>
            <View style={styles.leftContainerInner}>
              <Image 
                style={styles.imageDimensions}
                source={this.props.itemImage}
              />
            </View>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.titleText}>{this.props.itemTitle}</Text>
            <View>
              <Text style={styles.purchaseText}>Purchased</Text>
              <Text>{this.props.itemPurchaseDate}</Text>
            </View>
          </View>
      </TouchableOpacity>
        
      );
      }
}
  /** original way the source was in image tag (didn't work): soucre= {{{ uri: imageURL }}} */

export default ItemComp;