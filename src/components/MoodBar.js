import React from 'react';
import { View, StyleSheet } from 'react-native';

const MoodBar = ({ mood }) => {
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

  return <View style={styles.barContainer}>{barSections}</View>;
};

const styles = StyleSheet.create({
    barContainer: {
        flexDirection: 'row', // Change to row direction
        justifyContent: 'flex-end', // Move items to the right
        alignItems: 'center', // Vertically center items
        paddingVertical: 10,
        paddingHorizontal: 20, // Add horizontal padding for spacing from edges
        width: '100%', // Ensure the container takes full width
    },
    barSection: {
      width: 20,
      height: 10,
      borderRadius: 2,
      marginHorizontal: 1, // Add some spacing between sections if needed
    },
});

export default MoodBar;
