import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';

function ShopTitle () {
  const titleText = 'Shop';
  return (
    <Text style={styles.titleText}>
      {titleText}
    </Text>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'black',
    position: 'absolute',
    top: 30,
    left: 10,
    opacity: 0.75,
  },
});

export default ShopTitle;