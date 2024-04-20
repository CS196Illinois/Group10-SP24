import { Pressable, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native'
import React from 'react'
import { useState } from 'react';

const ShopBox = ({ itemName, itemCost, itemImage, pressReact }) => {

  
  
  const Pressed = () => {
      // Check Coin Count
      // Purchase Item
      // Update Coin Count
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