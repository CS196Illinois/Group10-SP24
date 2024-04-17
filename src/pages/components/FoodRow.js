import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ShopBox from './ShopBox'
import apple from '../assets/apple.png'
import Confirmation from './Confirmation'

const FoodRow = () => {
  return (
    <View style={styles.container2}>
        <Text style={styles.text}>Food</Text>
    <View style={styles.container}>

      <ShopBox 
        itemName="Raw Steak"
        itemCost="100"
      />

      <ShopBox 
        itemName="Roast Beef"
        itemCost="75"
      />

      <Confirmation
        itemName="Apple"
        itemCost="20"
        itemImage={apple}
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