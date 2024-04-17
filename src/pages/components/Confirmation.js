import { StyleSheet, Text, View, Button, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { useState } from 'react'
import ShopBox from './ShopBox';

const Confirmation = ({ itemName, itemCost, itemImage }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleYes = () => {
    setIsVisible(false);
    //Add supabase code
  }

  const handleNo = () => {
    setIsVisible(false);
  }

  const handlePress = () => {
    setIsVisible(true);
  }

  
  return (
    <>
    <ShopBox
    pressReact={() => {
        setIsVisible(true);
        }}
    itemName={itemName}
    itemCost={itemCost}
    itemImage={itemImage}
    />

    {isVisible && (
    <View style={styles.container1}>
        <View style={styles.container}>
        <Text>Would you like to purchase {itemName} for {itemCost} coins?</Text>
            <View style={styles.buttoncontainer}>
                <Button title='Yes!' onPress={handleYes} style={styles.yesbutton}>
                    <Text>Yes!</Text>
                </Button>
                <Button title='No!' onPress={handleNo} style={styles.nobutton}>
                    <Text>No!</Text>
                </Button>
            </View>
        </View>
    </View>)}
    </>
  );
};

export default Confirmation

const styles = StyleSheet.create({
    container1: {
        position: 'absolute',
        zIndex: 999,
        top: 100,
    },
    container: {
        backgroundColor: 'white',
        width: 250,
        height: 200,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 20,
        padding: 10,
    },
    text: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold',
    },
    buttoncontainer: {
        flex: 1,
        flexDirection: 'row',
    },
    nobutton: {
        color: 'darkgrey',
        width: 30,
        height: 20,
    },
    yesbutton: {
        color: 'deepseagreen',
        width: 30,
        height: 20,
    }
})