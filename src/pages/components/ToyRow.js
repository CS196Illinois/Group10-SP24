import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ShopBox from './ShopBox'

const ToyRow = () => {
  return (
    <View style={styles.container2}>
      <Text style={styles.text}>Toys</Text>
      <View style={styles.container}>
        <ShopBox
          itemName="Stuffed Mouse"
          itemCost="100"
        />
        <ShopBox
          itemName="Rope Toy"
          itemCost="75"
        />
        <ShopBox
          itemName="Tennis Ball"
          itemCost="35"
        />
      </View>
    </View>
  )
}

export default ToyRow

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        gap: 15,
        position: 'relative',
    },
    container2: {
        flex: 1,
        flexDirection: 'column',
        top: 82.5,
        position:'relative',
        zIndex: 0,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        top: -10,
        position: 'relative',
    }
})