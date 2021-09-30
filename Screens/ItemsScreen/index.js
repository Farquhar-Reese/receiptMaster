import React from 'react';
import {useState} from "react";
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { Container } from "native-base";
import styles from "./styles";




class ItemScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props: Props) {
    super(props);
    this.state = { 
      purposeText: "This app will capture your receipts and save them in an easy to access place. You will be able to traverse through your old receipts electronically via this app."
    };
  }

  

  setSearchText(event) {
    let searchText = event.nativeEvent.text;
    this.setState((state) => {
      return {purposeText: searchText};
    });
   }
  

  render() {
    return (
      <Container style={{ backgroundColor: "#FFF" }}>
        
        <View style={styles.searchBarContainer}>
          <TextInput 
            value={this.state.searchText}
            onChange={this.setSearchText.bind(this)}
            placeholder= {"Change the purpose of this app..."}
            style={styles.searchBar}
          />
        </View>
          <View style = {styles.purpose}>
            <Text style = {styles.purposeTxt} >App's purpose:</Text>
            <Text style = {styles.purposeTxt} >{this.state.purposeText}</Text>
          </View>
        
      </Container>
    );
    }
  }

  export default ItemScreen;