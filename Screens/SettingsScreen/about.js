import React from 'react';
import {useState} from "react";
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { Container } from "native-base";
import styles from "./styles";
import { TouchableOpacity } from 'react-native-gesture-handler';



const ItemScreen = () => {

const [purposeText, changePurposeText] = useState("This app will capture your receipts and save them in an easy to access place. You will be able to traverse through your old receipts electronically via this app.");
const [textInput, changeTextInput] = useState("");
const [textColor, changeTextColor] = useState(false);


  
  changeAboutTxt = (text) => {
    if (text.length > 0) {
        changePurposeText(text)
    } else {
        changePurposeText("This app will capture your receipts and save them in an easy to access place. You will be able to traverse through your old receipts electronically via this app.")
    }
    changeTextInput(text)
  }

  
    return (
      <Container style={{ backgroundColor: "#FFF" }}>
        
        <View style={styles.searchBarContainer}>
          <TextInput 
            value={textInput}
            onChangeText={text => changeAboutTxt(text)}
            placeholder= {"Change the purpose of this app..."}
            style={styles.searchBar}
          />
        </View>
          <View style = {styles.purpose}>
            <Text style = {styles.purposeTxt} >App's purpose:</Text>
            <Text style = {textColor ? styles.purposeTxtPurple : styles.purposeTxt} >{purposeText}</Text>
            <TouchableOpacity style = {styles.stateBut} 
            onPress={() => {
                if (textInput.length > 5){
                    changeTextColor(true)
                } else {
                    changeTextColor(false)
                }
              }}
            > 
            <Text  style = {styles.purposeTxt}>
                StateButton
            </Text>
            </TouchableOpacity>
          </View>
        
      </Container>
    );
    
  }

  export default ItemScreen;