import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, TextInput } from 'react-native';
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

class receiptDetailsScreen extends React.Component {
    static navigationOptions = {
      header: null
    };
  
    constructor(props) {
      super(props);
      this.state = { 
        receiptJson: [],
        titleTxt: "",
        detailedNote: ""
      };
      
      console.log("details screen for receipt...");
      //const { camPic } = route.params;
    }

    componentDidMount() {
        this.setState({
            receiptJson: [...this.state.receiptJson, {
            id: this.props.route.params.pic.uri,
            imageData: this.props.route.params.pic,
            imageURI:  this.props.route.params.pic.uri}],
          });
    }
  
    addBut = () =>{
      console.log("made it to the addBut")
    }

    changeTxt4Title = (changedTxt) => {
        this.setState({
            titleTxt: changedTxt
          });
    }
    changeTxt4DetailedNote  = (changedTxt) => {
        this.setState({
            detailedNote: changedTxt
          });
    }
  
   /** 
    * 
    * 
    * 
    * styles.leftContainerInner
    */

   
   
    render() {
        const DATA = [
            {
              id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
              title: 'First Item',
              imageURI:  this.props.route.params.pic.uri
            },
            {
              id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
              title: 'Second Item',
              imageURI:  this.props.route.params.pic.uri
            },
            {
              id: '58694a0f-3da1-471f-bd96-145571e29d72',
              title: 'Third Item',
              imageURI:  this.props.route.params.pic.uri
            },
            {
                id: '48dogeCoin',
                title: 'Third Item',
                imageURI:  this.props.route.params.pic.uri
              },
          ];

          const renderItem = ({ item }) => (
              
              <View style={styles.leftContainer}>
                    <View style={styles.leftContainerInner}>
                        <Image 
                            style={styles.imageDimensions}
                            source={{ uri: item.imageURI }}
                        />
                    </View>
                </View>
          );
      
    
      return (
        <View style={{ margin: 0, flex: 1, width: 'auto', height: '100%', display: 'flex', alignItems: 'center', backgroundColor: Colors.tintColor }}>
            
            <View style={styles.compBackground}>
                <FlatList
                horizontal={true}
                data={this.state.receiptJson}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
                
          </View>
          <View style={{padding: 15, flex: 1, width: "100%", }}>
                <Text style={styles.detailsTitles}>Title this purchase: </Text>
                        <TextInput
                        style={styles.detailPgInput}
                        onChangeText={this.changeTxt4Title}
                        value={this.state.titleTxt}
                        placeholder="Enter a title here..."
                        >
                        </TextInput>
                <Text style={styles.detailsTitles}>Add a more detailed description about purchase: </Text>
                        <TextInput
                        style={styles.detailPgInputLarge}
                        onChangeText={this.changeTxt4DetailedNote}
                        value={this.state.detailedNote}
                        placeholder="Describe your purchase more here..."
                        multiline={true}
                        >
                        </TextInput>
                <View style={styles.butContainer}>
                    <TouchableOpacity style={styles.butStyle}>
                        <Text style={styles.butTxt}>Finish</Text>
                    </TouchableOpacity>
                </View>
                
          </View>  
        </View>
      );
    }
  
  }
  
  export default receiptDetailsScreen;