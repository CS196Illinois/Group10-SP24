import { Pressable, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native'
import React from 'react'
import { useState } from 'react';

const ShopBox = ({ itemName, itemCost, itemImage, pressReact }) => {
  const onPress = () => {
  };

  return (
    <TouchableOpacity style={styles.button} onPress={pressReact}>
      <View>
        <Image source={itemImage} style={styles.image}/>
        <Text style={styles.text}>{itemName}</Text>
        <Text style={styles.text}>{itemCost} Coins</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ShopBox

const styles = StyleSheet.create({
    button: {
        width: 125,
        height: 150,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 12.5,
        justifyContent: 'flex-end',
        borderColor: 'black',
        borderWidth: 3,
        position: 'relative',
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
    }
})