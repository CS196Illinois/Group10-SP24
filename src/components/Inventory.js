import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Inventory = ({ items }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventory</Text>
      <View style={styles.itemsContainer}>
        {items.map((item, index) => (
          <TouchableOpacity key={index} style={styles.item}>
            <Text>{item.name}</Text>
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
    backgroundColor: '#f0f0f0',
    padding: 10,
    margin: 5,
  },
});

export default Inventory;