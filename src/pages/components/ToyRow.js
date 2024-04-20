import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ShopBox from './ShopBox'
import Confirmation from './Confirmation'
import mouse from '../assets/StuffedMouse.jpg'
import tennisball from '../assets/TennisBall.jpg'
import ropetoy from '../assets/RopeToy.jpg'

const ToyRow = () => {
  return (
    <View style={styles.container2}>
      <Text style={styles.text}>Toys</Text>
      <View style={styles.container}>
        <ShopBox
          itemName="Stuffed Mouse"
          itemCost="100"
          itemImage={mouse}
        />
        <ShopBox
          itemName="Rope Toy"
          itemCost="75"
          itemImage={ropetoy}
        />
        <ShopBox
          itemName="Tennis Ball"
          itemCost="35"
          itemImage={tennisball}
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
        zIndex: 0,
    }
})