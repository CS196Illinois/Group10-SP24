import { StyleSheet, Text, View, Image } from 'react-native'
import { React, useEffect, useState } from 'react';
import { supabase } from './initSupabase';
import Inventory from '../components/Inventory';
import HealthBar from '../components/HealthBar';
import MoodBar from '../components/MoodBar';

import dog from '../assets/placeholderDog.png';
import apple from '../assets/apple.png';
import bone from '../assets/bone.png';
import collar from '../assets/collar.png';

const HomeScreen = () => {

	[currentHealth, setCurrentHealth] = useState(5);
  	[currentMood, setCurrentMood] = useState(5);
	
	items = [
		{ name: 'Apple' , image: apple , healthEffect: -1, moodEffect:  0 },
		{ name: 'Bone'  , image: bone  , healthEffect:  3, moodEffect:  2 },
		{ name: 'Collar', image: collar, healthEffect:  0, moodEffect: -2 },
	];
	
	const handleItemPress = (item) => {
		if (item.healthEffect) {
		  setCurrentHealth((prevHealth) => Math.max(0, Math.min(prevHealth + item.healthEffect, 5)));
		}
		if (item.moodEffect) {
		  setCurrentMood((prevMood) => Math.max(0, Math.min(prevMood + item.moodEffect, 5)));
		}
	};

	const handleAddItem = (item) => {

	};

	return (
		<View>
			<HealthBar health={currentHealth} />
			<MoodBar mood={currentMood} />
			<Image source={dog} style={styles.petImage} />
			<Inventory items={items} onItemPress={handleItemPress}/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	petImage : {
		width: 200,
		height: 200,
		alignSelf: 'center',
		marginVertical: 50,
	}
});

export default HomeScreen;

/*
	Unused Code to display usernmaes and coin counts
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