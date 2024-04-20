import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

function Circle2() {
  return(
    <View 
    style={styles.circle} 
    />
  )
};

const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    opacity: 0.4,
    width: 325,
    height: 325,
    borderRadius: 325 / 2,
    backgroundColor: "white",
    top: 191,
    left: -105,
  },
})

export default Circle2;
