import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native'
import { useEffect, useState } from 'react';
import { supabase } from './initSupabase';
import HealthBar from '../components/HealthBar';
import MoodBar from '../components/MoodBar';
import placeholderDog from '../assets/placeholderDog.png';
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

	currentHealth = 2;
	currentMood = 4;
	items = [
		{ name: 'Item 1' },
		{ name: 'Item 2' },
		{ name: 'Item 3' },
		// Add more items as needed
	];
	
	/*Once pets are uploaded, change from constants to actual data
	example:
		currentHealth = pet.hunger_level
		currentMood = pet.happiness_level
	those are the names of the values on the supabase
	*/


	return (
		<View>
			<HealthBar health={currentHealth} />
			<MoodBar mood={currentMood} />
			<Image source={placeholderDog} style={{ width: 200, height: 200, alignSelf: 'center', marginVertical: 20 }} />
			<Inventory items={items} />
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