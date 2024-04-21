import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
// import { supabase } from './initSupabase';
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Circle1 from './components/Circles/Circle1';
import Circle2 from './components/Circles/Circle2';
import Circle3 from './components/Circles/Circle3';
import ShopTitle from './components/ShopTitle';
import CoinCount from './components/CoinCount';
import ShopBox from './components/ShopBox';
import FoodRow from './components/FoodRow';
import ToyRow from './components/ToyRow';
import ClothesRow from './components/ClothesRow';
import { useEffect } from 'react';
import { getUser } from '../db_commands';

const ShopScreen = () => {

  const[coinCounts, setCoins] = useState(0);

  
  useEffect(() => {

    async function mySetCoins() {
      setCoins((await getUser(2)).num_coins);
    }

    mySetCoins();
    console.log("coin state: "+coinCounts)
  })


    return (
      <View 
      style={styles.container}>
        <LinearGradient
            colors={['rgb(103,240,213)', 'rgb(206,251,175)']}
            style={styles.background}
        />
        <Circle1 />
        <Circle2 />
        <Circle3 />
        <ShopTitle />
        <CoinCount coins={coinCounts} />
        <View style={styles.container2}>
         <FoodRow UserCoins1={coinCounts}/>
         <ToyRow UserCoins1={coinCounts}/>
         <ClothesRow UserCoins1={coinCounts}/>
        </View>
      </View>
    )
  }

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    flexDirection: 'column',
    gap: 40,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 800,
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