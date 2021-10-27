import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Image } from 'react-native';
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
        <View style={styles.detailsContainer}>
            <Text style={styles.titleTxt4Details}>{route.params.item.title}</Text>
            <Image 
                            style={styles.detailImage}
                            source={{ uri: route.params.item.image }}
                        />
            <View style={styles.detailsSubContainer}>
                <Text style={styles.titleTxt4DetailsUnderlined}>Purchased:</Text>
                <Text style={styles.titleTxt4Detailsparagraph}>{route.params.item.datePurchased}</Text>
                <Text style={styles.titleTxt4DetailsUnderlined}>Notes:</Text>
                <Text style={styles.titleTxt4Detailsparagraph}>{route.params.item.description}</Text>
            </View>
        </View>
        
    );



}

export default detailsScreen;