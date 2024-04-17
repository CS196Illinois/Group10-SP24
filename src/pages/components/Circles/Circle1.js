import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

function Circle1() {
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
    width: 360,
    height: 360,
    borderRadius: 360 / 2,
    backgroundColor: "white",
    top: -59,
    left: 234,
  },
})

export default Circle1;
