import React from 'react';
import {useState} from "react";
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import { Container, Content } from "native-base";
import ListComp from "./listComponet";
import styles from "./styles";

import imageURLHeadphones from "../../assets/Headphones.jpeg"
import imageURLLambo from "../../assets/Lambo.jpg"
import imageURLPS5 from "../../assets/Ps4.jpeg"

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
];

class ItemScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props: Props) {
    super(props);
    this.state = { 
      dataJson: []
    };
    this.add2ListItems = this.add2ListItems.bind(this)
  }

  componentDidMount() {
      this.setState({
        dataJson: ListItems,
        searchText: ''
      });
  }

  add2ListItems(newListItem){
    this.setState( {
      dataJson: [...dataJson, newListItem]
    })
  }

  setSearchText(event) {
    let searchText = event.nativeEvent.text;
    console.log("the search text is ", searchText);
    // this.setState({searchText});
    //  if(this.state.searchText.length >= 1){
    //    this.setState({displayList: true});
    //  }else{
    //    this.setState({displayList: false});
    //  }
     //let filteredData = this.filterInfo(searchText, info);
     // console.log("filter data", filteredData)
     //this.setState( {ds: this.state.ds.cloneWithRows(filteredData)});
     //console.log(this.state.ds)
   }
  

  render() {
    return (
      <Container style={{ backgroundColor: "#FFF" }}>
        <View style={styles.searchBarContainer}>
          <TextInput 
            value={this.state.searchText}
            onChange={this.setSearchText.bind(this)}
            placeholder= {"Search for previous purchase..."}
            style={styles.searchBar}
          />
        </View>
          <FlatList
            data={this.state.dataJson}
            renderItem={({ item, index }) => (
              <View>
                <ListComp 
                index={index}
                itemImage={item.image}
                itemTitle={item.title}
                itemPurchaseDate={item.datePurchased}
                navigation={"needToAddProperNaviagation"}
                />
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
      </Container>
    );
    }
  }

  export default ItemScreen;