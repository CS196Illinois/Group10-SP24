import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ShopBox from './ShopBox'
import Confirmation from './Confirmation'
import mouse from '../assets/StuffedMouse.png'
import tennisball from '../assets/TennisBall.png'
import ropetoy from '../assets/RopeToy.png'

const ToyRow = ( {UserCoins1} ) => {
  return (
    <View style={styles.container2}>
      <Text style={styles.text}>Toys</Text>
      <View style={styles.container}>
        <ShopBox
          itemName="StuffedMouse"
          itemCost={100}
          itemImage={mouse}
          userCoins={UserCoins1}
        />
        <ShopBox
          itemName="RopeToy"
          itemCost={75}
          itemImage={ropetoy}
          userCoins={UserCoins1}
        />
        <ShopBox
          itemName="TennisBall"
          itemCost={35}
          itemImage={tennisball}
          userCoins={UserCoins1}
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