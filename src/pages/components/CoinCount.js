import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CoinCount = () => {
    this.state = {
        Coins: 100
    }

  return (
    <Text style={styles.coinText}>
      Coin Count: {this.state.Coins}
    </Text>
  );
};

export default CoinCount

const styles = StyleSheet.create({
  coinText: {
    fontSize : 20,
    fontWeight: 'bold',
    color: 'black',
    opacity: 0.75,
    position: 'absolute',
    top: 20,
    left: 15,
  },
});