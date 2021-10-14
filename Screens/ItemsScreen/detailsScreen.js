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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';




const detailsScreen = (item) => {
    const route = useRoute()
    return (
        <View>
            <Text>Item Details: </Text>
            <Text>{route.params.item.title}</Text>
            <Text>{route.params.item.description}</Text>
            <Text>{route.params.item.datePurchased}</Text>
        </View>
        
    );



}

export default detailsScreen;