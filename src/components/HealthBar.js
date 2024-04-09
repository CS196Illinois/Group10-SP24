import React from 'react';
import { View, StyleSheet } from 'react-native';

const HealthBar = ({ health }) => {
  const barSections = Array.from({ length: 5 }, (_, index) => (
    <View
      key={index}
      style={[
        styles.barSection,
        { 
            backgroundColor: index < health ? '#66ff33' : 'red',
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
        //marginVertical: 80,
        paddingVertical: 7,
        paddingHorizontal: 10, // Add horizontal padding for spacing from edges
        width: '100%', // Ensure the container takes full width
    },
    barSection: {
      width: 40,
      height: 20,
      borderRadius: 5,
      marginHorizontal: 1, // Add some spacing between sections if needed
    },
});

export default HealthBar;
