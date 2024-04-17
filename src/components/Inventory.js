import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Inventory = ({ items, onItemPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventory</Text>
      <View style={styles.itemsContainer}>
        {items.map((item, index) => (
          <TouchableOpacity key={index} style={styles.item} onPress={() => onItemPress(item)}>
            <Image source={item.image} style={styles.itemImage} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    backgroundColor: '#FFFFFF',
    borderColor: '#000000',
    borderWidth: 3,
    padding: 13.25,
    margin: 5,
  },
  itemImage: {
    width: 50,
    height: 50,
  },
});

export default Inventory;
