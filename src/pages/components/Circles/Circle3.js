import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

function Circle3() {
  return(
    <View 
    style={styles.circle} 
    />
  )
};

const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    opacity: 0.3,
    width: 550,
    height: 550,
    borderRadius: 550 / 2,
    backgroundColor: "white",
    top: 500,
    left: 172,
  },
})

export default Circle3;
