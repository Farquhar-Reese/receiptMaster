import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import { Container, Content } from "native-base";
import ListComp from "./listComponet";
import styles from "./styles";

import imageURLHeadphones from "../../assets/Headphones.jpeg"
import imageURLLambo from "../../assets/Lambo.jpg"
import imageURLPS5 from "../../assets/Ps4.jpeg"

import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';



const ItemScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  
  /*
  const ListItems = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Headphones",
      image: imageURLHeadphones,
      datePurchased: "7/14/2022"
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Lamborghini Aventador",
      image: imageURLLambo,
      datePurchased: "7/15/2022"
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "PS5",
      image: imageURLPS5,
      datePurchased: "7/16/2022"
    },
  ]; */

  const ListItems = [];

  const [dataJson, changeDataJson] = useState(ListItems);
  const [searchText, changeSearchText] = useState("");
  const [refreshState, changerefreshState] = useState(69);

  const add2ListItems = (newListItem) => {
    changeDataJson([...dataJson, newListItem])
  }

  const setSearchText = (userTxt) => {
    changeSearchText(userTxt)
  }

  useFocusEffect(
    React.useCallback(() => {
      getData()
      // Do something when the screen is focused
      return () => {
        //alert('Screen was unfocused');
        console.log("unfocused the screen")
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );
  

  /*
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData()
    });
    return unsubscribe;
    },[navigation])

    */

  const getData = async () => {
    
    console.log("made it in the userEffect")
    try {
      const jsonValue = await AsyncStorage.getItem('@Receipts')
      let data = null
      if (jsonValue!=null) {
        console.log("we made it through useEffect and the dataInAsync is not empty for @Receipts")
        data = JSON.parse(jsonValue)
        console.log(data)
        changeDataJson(data)
        console.log("I updated the dataJson")
      } 
    } catch(e) {
      console.dir(e)
    }
}

const refresh = () => {
  changerefreshState(420)
  console.log("we made it to the refresh function")
  console.log(refreshState)
}
  
    return (
      <Container style={{ backgroundColor: "#FFF" }}>
        <View style={styles.searchBarContainer}>
          <TextInput 
            value={searchText}
            onChange={setSearchText}
            placeholder= {"Search for previous purchase..."}
            style={styles.searchBar}
          />
        </View>
          <FlatList
            data={dataJson}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress= { () => {navigation.navigate('ItemDetails', {item: item})}} >
                <ListComp 
                index={index}
                itemImage={{uri: item.image}}
                itemTitle={item.title}
                itemPurchaseDate={item.datePurchased}
                />
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            extraData={dataJson}
          />
      </Container>
    );
  }

  export default ItemScreen;