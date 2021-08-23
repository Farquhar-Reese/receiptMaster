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
    console.log("final image notes reeeeee:");
    console.log(this.props.pic);
    console.log(this.props.route.params.pic);
    //const { camPic } = route.params;
  }
 
  render() {
    return (
      <View style={{ margin: 20, flex: 1, width: 'auto', height: '100%', display: 'flex', alignItems: 'center' }}>
      
      
      <Image 
            style={{ height: '90%', width: '90%'}}
            source={{ uri: this.props.route.params.camPic.uri }}
            
          />
          <View style={{flex: 1, width: '100%', height: 'auto', display: 'flex', justifyContent: 'space-around', flexDirection: 'row', backgroundColor: 'red', alignItems: 'center' }}>
            <Text>Add Picture(s) </Text>
            <Text>Finish</Text>
          </View>
          </View>
    );
  }

}

export default PictureDetailsScreen;


