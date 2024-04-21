import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ShopBox from './ShopBox'
import Confirmation from './Confirmation'
import collar from '../assets/collar.png'
import pinkCollar from '../assets/pinkCollar.png'
import blackHat from '../assets/BlackHat.png'

const ClothesRow = ({UserCoins1, onPurchase}) => {
  return (
    <View style={styles.container2}>
        <Text style={styles.text}> Clothes </Text>
    <View style={styles.container}>
      <ShopBox
        itemName="collar"
        itemCost={200}
        itemImage={collar}
        userCoins={UserCoins1}
        onPurchase={onPurchase}
        />
      <ShopBox
        itemName="pinkCollar"
        itemCost={100}
        itemImage={pinkCollar}
        userCoins={UserCoins1}
        onPurchase={onPurchase}
        />
      <ShopBox
        itemName="BlackHat"
        itemCost={150}
        itemImage={blackHat}
        userCoins={UserCoins1}
        onPurchase={onPurchase}
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
        top: 15,
        position: 'relative',
        zIndex: 0,
    }
})