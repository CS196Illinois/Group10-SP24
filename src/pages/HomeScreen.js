import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native'
import { useEffect, useState } from 'react';
import { supabase } from './initSupabase';
import HealthBar from '../components/HealthBar';
import MoodBar from '../components/MoodBar';
import placeholderDog from '../assets/placeholderDog.png';
import item1 from '../assets/item1.png';
import bone from '../assets/bone.png';
import collar from '../assets/collar.png';
import Inventory from '../components/Inventory';

import React from 'react';

const HomeScreen = () => {

	/*
	const [usernames, setNames] = useState([]);
	useEffect(() => {
		getUserNames();
	}, []);

	async function getUserNames() {
		const { data } = await supabase.from("users").select();
		// usernames = data;
		setNames(data);
	}

	{usernames.map((user) => (
		<Text key={user.user_name}>{user.user_name}, {user.num_coins}</Text>
	))}
	*/

	[currentHealth, setCurrentHealth] = useState(2);
  	[currentMood, setCurrentMood] = useState(4);
	
	items = [
		{ name: 'Item 1', image: item1, effect: 'health', amount: -2 },
		{ name: 'Item 2', image: bone, effect: 'health', amount: 2 },
		{ name: 'Item 3', image: collar, effect: 'mood', amount: -2},
		// Add more items with image URIs
	];
	
	/*Once pets are uploaded, change from constants to actual data
	example:
		currentHealth = pet.hunger_level
		currentMood = pet.happiness_level
	those are the names of the values on the supabase
	*/
	const handleItemPress = (item) => {
		if (item.effect === 'health') {
			setCurrentHealth((prevHealth) => Math.max(0, Math.min(prevHealth + item.amount, 5)));
		} else if (item.effect === 'mood') {
			setCurrentMood((prevMood) => Math.max(0, Math.min(prevMood + item.amount, 5)));
		}
	};

	return (
		<View>
			<HealthBar health={currentHealth} />
			<MoodBar mood={currentMood} />
			<Image source={placeholderDog} style={{ width: 200, height: 200, alignSelf: 'center', marginVertical: 20 }} />
			<Inventory items={items} onItemPress={handleItemPress}/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	}
  });

export default HomeScreen;