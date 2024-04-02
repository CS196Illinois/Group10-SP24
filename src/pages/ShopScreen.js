import { ImageBackground, StyleSheet, Text, View } from 'react-native'
// import { supabase } from './initSupabase';
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';


const ShopScreen = () => {
    return (
      <View style={styles.container}>
        <LinearGradient
            colors={['rgb(103,240,213)', 'rgb(206,251,175)']}
            style={styles.background}
        />
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
});


export default ShopScreen;