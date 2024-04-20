import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ShopBox from './ShopBox'
import apple from '../assets/apple.png'
import bone from '../assets/bone.png'
import Confirmation from './Confirmation'
import poison from '../assets/poison.png'

const FoodRow = ({ UserCoins1 }) => {
  return (
    <View style={styles.container2}>
        <Text style={styles.text}>Food</Text>
    <View style={styles.container}>

      <ShopBox 
        itemName="Poison"
        itemCost={0}
        itemImage={poison}
        userCoins={UserCoins1}
      />

      <ShopBox 
        itemName="Bone"
        itemCost={75}
        itemImage={bone}
        userCoins={UserCoins1}
      />

      <ShopBox
        itemName="Apple"
        itemCost={20}
        itemImage={apple}
        userCoins={UserCoins1}
      />

    </View>
    </View>
  )
}

export default FoodRow

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'row',
        gap: 15,
    },
    container2: {
        flex: 1,
        flexDirection: 'column',
        top: 150,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        top: -10,
        zIndex: 10,
    }
})