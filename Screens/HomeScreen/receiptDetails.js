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
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import itemsScreen from '../ItemsScreen/index'

import { StackActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from "../../Constants/Colors";

const receiptDetailsScreen = (pic) => {
    const navigation = useNavigation();
    const route = useRoute();
    const [receiptJson, changeReceiptJson] = useState([{
      id: route.params.pic.uri,
      imageData: route.params.pic,
      imageURI:  route.params.pic.uri}]);
    const [titleTxt, changeTitleTxt] = useState("");
    const [detailedNote, changeDetailedNote] = useState("");


    useEffect(() => {getData()}
           ,[])

    const getData = async () => {
      console.log("my  recepitJson = ")
      console.log(receiptJson)
      console.log("we made it inside of getData")
      console.log("routeParams = ")
      console.log(route.params)
      console.log("normal Params = ")
      console.log(pic)
        try {
          const jsonValue = await AsyncStorage.getItem('@TempReceipts')
          let data = null
          if (jsonValue!=null) {
            console.log("we made it through useEffect and the dataInAsync is not empty for @TempReceipts")
            data = JSON.parse(jsonValue)
            changeReceiptJson(receiptJson.push(data))
          } 
        } catch(e) {
          console.dir(e)
        }
    }

    /*
    componentDidMount() {
        this.setState({
            receiptJson: [...this.state.receiptJson, {
            id: this.props.route.params.pic.uri,
            imageData: this.props.route.params.pic,
            imageURI:  this.props.route.params.pic.uri}],
          });
    }

    */
  
    const addBut = () =>{
      console.log("made it to the addBut")
    }

    const changeTxt4Title = (changedTxt) => {
      changeTitleTxt(changedTxt)
    }
    
    const changeTxt4DetailedNote  = (changedTxt) => {
      changeDetailedNote(changedTxt)
    }

    const storeData = async (value) => {
      try {
        if (value != null) {
          const jsonValue = JSON.stringify(value)
          const jsonValueOringal = await AsyncStorage.getItem('@Receipts')
          if (jsonValueOringal != null) {
            let data = null
            data = JSON.parse(jsonValueOringal)
            data.push(value)
            const newData = JSON.stringify(data)
            await AsyncStorage.setItem('@Receipts', newData)
          } else {
            await AsyncStorage.setItem('@Receipts', jsonValue)
          }
          
        }
      } catch (e) {
        console.dir(e)
      }
}


const storeListItem = async (value) => {
 
  try {
    if (value != null) {
      const jsonValue = JSON.stringify(value)
      const jsonWholeReceiptPicturePackage = await AsyncStorage.getItem('@Receipts')
      if (jsonWholeReceiptPicturePackage != null) {
        console.log("we made it inside of the receipt update stream")
        console.log(jsonWholeReceiptPicturePackage)
        console.log("we did something inside of storeListItem")
        let data = null
        data = JSON.parse(jsonWholeReceiptPicturePackage)
        data.push(value)
        console.log(data)
        console.log("finished printing the data")
        const newData = JSON.stringify(data)
        await AsyncStorage.setItem('@Receipts', newData).then(navigation.dispatch(StackActions.popToTop())).then(navigation.navigate('Search'))
      } else {
        let newReceiptList = []
        newReceiptList.push(value)
        await AsyncStorage.setItem('@Receipts', JSON.stringify(newReceiptList)).then(navigation.dispatch(StackActions.popToTop())).then(navigation.navigate('Search'))
      }
      
    }
  } catch (e) {
    console.dir(e)
  }
}

    const finishFun = () => {
      const newItem = {
        id: route.params.pic.uri,
        title: titleTxt,
        description: detailedNote,
        image: route.params.pic.uri,
        datePurchased: "7/15/2023"
      }
      /**
       * 1) learn how to pass new object to the search screen properly
       * 2) find a secure way to store large amounts of Data locally
       * 3) investigate cloud option if local storage is not secure enough 
       * 4) learn how to multithread various pictures into one receipt order/package/folder
       * 5) make purchase/searach screen a sectioned list for better organization
       * 
       * 
       *  storeData(receiptJson) --> use this to store multiple images with add button for flat list
       * 
       */
       storeListItem(newItem) 
    }
   
        const DATA = [
            {
              id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
              title: 'First Item',
              imageURI:  route.params.pic.uri
            },
            {
              id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
              title: 'Second Item',
              imageURI:  route.params.pic.uri
            },
            {
              id: '58694a0f-3da1-471f-bd96-145571e29d72',
              title: 'Third Item',
              imageURI:  route.params.pic.uri
            },
            {
                id: '48dogeCoin',
                title: 'Third Item',
                imageURI:  route.params.pic.uri
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
        <View style={{ margin: 0, flex: 1, width: 'auto', height: '100%', display: 'flex', alignItems: 'center' }}>
            
            <View style={styles.compBackground}>
                <FlatList
                horizontal={true}
                data={receiptJson}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={() => (
                <TouchableOpacity style={styles.addButStyle}>
                  <Ionicons
                    name={
                      "add-circle-outline"
                    }
                    size={50}
                    color={Colors.tintColorAlt}
                  />                  
                </TouchableOpacity>
                )}
            />
                
          </View>
          <View style={{padding: 15, flex: 1, width: "100%", }}>
                <Text style={styles.detailsTitles}>Title this purchase: </Text>
                        <TextInput
                        style={styles.detailPgInput}
                        onChangeText={changeTxt4Title}
                        value={titleTxt}
                        placeholder="Enter a title here..."
                        >
                        </TextInput>
                <Text style={styles.detailsTitles}>Add a more detailed description about purchase: </Text>
                        <TextInput
                        style={styles.detailPgInputLarge}
                        onChangeText={changeTxt4DetailedNote}
                        value={detailedNote}
                        placeholder="Describe your purchase more here..."
                        multiline={true}
                        >
                        </TextInput>
                <View style={styles.butContainer}>
                    <TouchableOpacity style={styles.butStyle} onPress={finishFun}>
                        <Text style={styles.butTxt}>Finish</Text>
                    </TouchableOpacity>
                </View>
                
          </View>  
        </View>
      );
    
  
  }
  
  export default receiptDetailsScreen;