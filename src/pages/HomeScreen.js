import { StyleSheet, Text, View, Image } from 'react-native'
import { React, useEffect, useState } from 'react';
import { supabase } from './initSupabase';
import Inventory from '../components/Inventory';
import HealthBar from '../components/HealthBar';
import MoodBar from '../components/MoodBar';

import dogHappy from '../assets/dogHappy.png';
import dogSad from '../assets/dogSad.png';
import dogNeutral from '../assets/dogMeh.png';
import apple from '../assets/apple.png';
import bone from '../assets/bone.png';
import collar from '../assets/collar.png';

const HomeScreen = () => {

	[currentHealth, setCurrentHealth] = useState(5);
  	[currentMood, setCurrentMood] = useState(5);
	
	useEffect(() => {
		const interval = setInterval(() => {
		  lowerStats();
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const lowerStats = () => {
		setCurrentHealth((prevHealth) => prevHealth - 1);
		setCurrentMood((prevMood) => prevMood - 1);
	}

	const determinePetImage = () => {
		if (currentHealth <= 1 || currentMood <= 1) {
		  return dogSad;
		} else if (currentMood <= 3 || currentHealth <= 3) {
		  return dogNeutral;
		} else {
		  return dogHappy;
		}
	};
	
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
		<View style={styles.container}>
			<View style={styles.circleContainer}>
        		<View style={[styles.circle, { top: 500, right: 50 }]} />
        		<View style={[styles.circle, { bottom: 30, left: 15 }]} />
				<View style={[styles.dropShadow, { bottom: 330, left: 140 }]} />
      		</View>
			<HealthBar health={currentHealth} />
			<MoodBar mood={currentMood} />
			<Image source={determinePetImage()} style={styles.petImage} />
			<Inventory items={items} onItemPress={handleItemPress}/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgba(50, 130, 190, 0.4)',
		//justifyContent: 'center',
		//alignItems: 'center',
	},
	petImage : {
		width: 200,
		height: 215,
		alignSelf: 'center',
		marginVertical: 50,
	},
	circleContainer: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	circle: {
		width: 200,
		height: 200,
		borderRadius: 100,
		backgroundColor: 'rgba(255, 255, 255, 0.5)', 
		position: 'absolute',
	},
	dropShadow: {
		width: 100,
		height: 100,
		borderRadius: 100,
		transform: [
			{scaleX:2}
		],
		backgroundColor: 'rgba(140, 140, 140, 1)', 
		position: 'absolute',
	},
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