import { Pressable, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { getUser, updateCoins, buyItem } from '../../db_commands';

const ShopBox = ({ itemName, itemCost, itemImage, userCoins, onPurchase }) => {

  
  const Pressed = async () => {
    console.log("pressed")
    console.log(userCoins)
    console.log(itemCost)
    
    if (userCoins >= itemCost) {
      console.log("buying item")
      await buyItem(2, itemName);
      onPurchase();
    }
  };

  return (
    <TouchableOpacity onPress={Pressed}>
      <View style={styles.button}>
        <Text style={styles.text}>{itemName}</Text>
        <Text style={styles.text}>{itemCost} Coins</Text>
      </View>
    <View style={styles.imagebackground} />
    <Image source={itemImage} style={styles.image}/>
    </TouchableOpacity>
  );
};

export default ShopBox

const styles = StyleSheet.create({
    box: {
      flex: 1,
      flexDirection: 'column',
    },
    button: {
        width: 125,
        height: 150,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 12.5,
        justifyContent: 'flex-end',
        position: 'relative',
        shadowColor: 'black',
        shadowOffset: {width: 6, height: 6},
        shadowOpacity: 0.3,
        opacity: 0.6,
    },
    text: {
        fontSize: 10,
        color: 'black',
        fontWeight: 'bold',
        fontFamily: ''
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 20,
        position: 'absolute',
        top: 10,
        left: 12.5,
    },
    imagebackground: {
      width: 100,
      height: 100,
      borderRadius: 20,
      position: 'absolute',
      top: 10,
      left: 12.5,
      backgroundColor: 'white',
    },
})