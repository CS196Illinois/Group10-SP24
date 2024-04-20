import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HealthBar = ({ mood }) => {
  const barSections = Array.from({ length: 5 }, (_, index) => (
    <View
      key={index}
      style={[
        styles.barSection,
        {
          backgroundColor: index < mood ? '#ffff00' : '#b6c5d6',
          borderColor: 'black',
          borderWidth: 1,
        },
      ]}
    />
  ));

  return (
    <View style={styles.barContainer}>
      <Text style={styles.text}>Mood:</Text>
      <View style={styles.barSectionsContainer}>{barSections}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  barContainer: {
    flexDirection: 'row', // Change to row direction
      justifyContent: 'flex-end', // Move items to the right
      alignItems: 'center', // Vertically center items
      paddingVertical: 0,
      paddingHorizontal: 10, // Add horizontal padding for spacing from edges
      width: '100%', // Ensure the container takes full width
    },
  text: {
    marginRight: 5,
    fontWeight: 'bold',
  },
  barSectionsContainer: {
    flexDirection: 'row',
  },
  barSection: {
    width: 40,
    height: 20,
    borderRadius: 5,
    marginHorizontal: 1,
  },
});

export default HealthBar;
