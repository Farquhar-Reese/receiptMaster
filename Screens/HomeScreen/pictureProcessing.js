import React from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Container, Content } from "native-base";
import Colors from "../../Constants/Colors"
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

  addBut = () =>{
    console.log("made it to the addBut")

    /**
     * 
     * original image component:
     * <Image 
            style={{ height: '100%', width: '100%'}}
            source={{ uri: this.props.route.params.camPic.uri }}
            
          />






          <View style={{flex: 1, width: '10%', height: 'auto', display: 'flex', justifyContent: 'space-around', flexDirection: 'row', backgroundColor: 'red', alignItems: 'center' }}>
          
          <TouchableOpacity
        style={{backgroundColor: 'orange'}}
        onPress={this.addBut()}
      >
        <Text>Retake</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{backgroundColor: 'orange'}}
        onPress={this.addBut}
      >
        <Text>Continue</Text>
      </TouchableOpacity>
          
          </View>
     */
  }

 
 
  render() {
    
    
    return (
      <View style={{ margin: 0, flex: 1, width: 'auto', height: '100%', display: 'flex', alignItems: 'center' }}>
      
      
      <ImageBackground  
            style={{ width: "100%", height: "100%", justifyContent: 'center'}}
            source={{ uri: this.props.route.params.camPic.uri }}
            resizeMode="cover" >
            
           <View style={{ flex: 1, flexDirection: "column", justifyContent: 'space-between', padding: "5%", height: "100%"}}> 

        <View  style={{display: "flex", flexDirection: "row", justifyContent: 'flex-start'}}>
           <TouchableOpacity
        onPress={this.addBut}
      >
         <MaterialIcons
            name={Platform.OS === "ios" ? "highlight-remove" : "highlight-remove"}
            size={70}
            style={{ marginBottom: 0 }}
            color={"#D21F3C"}
          />
      </TouchableOpacity>
      </View>
      <View  style={{display: "flex", flexDirection: "row", justifyContent: 'flex-end'}}>
      <TouchableOpacity
        
        onPress={this.addBut}
      >
        <MaterialIcons
            name={Platform.OS === "ios" ? "arrow-forward-ios" : "arrow-forward"}
            size={70}
            style={{ marginBottom: 0 }}
            color={Colors.tintColorAlt}
          />
      </TouchableOpacity>
      </View>

           </View>
          

          

          </ImageBackground>
          </View>
    );
  }

}

export default PictureDetailsScreen;



