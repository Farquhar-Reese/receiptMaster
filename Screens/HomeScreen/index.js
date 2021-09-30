import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Container, Content } from "native-base";
/*import HeaderComp from "../../Components/HeaderComp"; this is my custom built header component
This is how you call it:
<HeaderComp titleTxt={"New Receipt"} />
*/
import CamComp from "./cameraComponent"
import styles from './styles';
import Icon from "react-native-vector-icons/FontAwesome";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import * as ImagePicker from 'expo-image-picker';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      picTaken: false
    };
    this.onPicture = this.onPicture.bind(this);
    this.navigateToSubPage = this.navigateToSubPage.bind(this)
  }

  navigateToSubPage(nav, pic) {
    console.log("inside the nav section. Pic is:")
    console.log(pic)
    console.log("ExampleField: ")
    console.log(pic.width)
      nav.navigate("Search", {
        camPic: pic,
      });
  }


  onPicture(pic) {
    console.log(pic)
    this.setState({
      picTaken: true
    });
    console.log("made it to the nav section")
    console.log(this.props.navigation)
    this.navigateToSubPage(this.props.navigation, pic)
  };

  useCameraRollPhoto() {
    console.log("made it to the cameraroll function")
    this.props.navigation.navigate("Settings");
  }


  
  
  render() {
    return (
      <Container style={styles.homeBackground}>
        
        <Content>
          <View style={styles.cameraBox}>
            <CamComp onPicture={this.onPicture}/> 
          </View>
          <TouchableOpacity onPress={() => this.useCameraRollPhoto()} style={styles.photoAlbumButton}>
            <Text style={styles.photoAlbumButtonText}>Go to Settings Screen</Text>
            

<MaterialIcons
            name={Platform.OS === "ios" ? "arrow-forward-ios" : "arrow-forward"}
            size={30}
            style={{ marginBottom: 0 }}
            color={"#fff"}
          />
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }

}

export default HomeScreen;
/* export default function App() {
//     return (
//       <Text>Test Screen 123</Text>
//     );
*/   