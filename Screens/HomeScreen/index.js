import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Container, Content } from "native-base";
import HeaderComp from "../../Components/HeaderComp";
import CamComp from "./cameraComponent"
import styles from './styles';
import Icon from "react-native-vector-icons/FontAwesome";
import { Colors } from 'react-native/Libraries/NewAppScreen';

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
    console.log(pic.uri)
      nav.navigate("Picture", {
        pic: pic.uri,
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
  }

  
  render() {
    return (
      <Container style={styles.homeBackground}>
        <HeaderComp titleTxt={"New Receipt"} />
        <Content>
          <View style={styles.cameraBox}>
            <CamComp onPicture={this.onPicture}/> 
          </View>
          <TouchableOpacity onPress={() => this.useCameraRollPhoto()} style={styles.photoAlbumButton}>
            <Text style={styles.photoAlbumButtonText}>Use Photo from Camera Roll</Text>
            <Icon
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
                name="arrow-right"
                size={30}
                color="white"
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