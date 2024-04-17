import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ShopBox from './ShopBox'

const ClothesRow = () => {
  return (
    <View style={styles.container2}>
        <Text style={styles.text}> Clothes </Text>
    <View style={styles.container}>
      <ShopBox
        itemName="Spiked Collar"
        itemCost="200"
        />
      <ShopBox
        itemName="Pink Collar"
        itemCost="100"
        />
      <ShopBox
        itemName="Black Hat"
        itemCost="150"
        />
    </View>
    </View>
  )
}

export default ClothesRow

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        gap: 15,
        bottom: -25
    },
    container2: {
        flex: 1,
        flexDirection: 'column',
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        top: 15
    }
})