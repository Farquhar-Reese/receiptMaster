import React from 'react';
import { Text, View, Image } from 'react-native';
import { Container, Content } from "native-base";
import styles from './styles';

class PictureDetailsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={{ backgroundColor: "blue" }}>
      
      <Text>Test Screen for Pic</Text>
      <Image 
            style={{width: 200, height: 200}}
            source={{ uri: this.props.pic }}
            
          />
          <Text>EndPic</Text>
          
          </Container>
    );
  }

}

export default PictureDetailsScreen;


