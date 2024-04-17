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
import collarCut from '../assets/collarCut.png';
import pinkCollar from '../assets/pinkCollar.png';
import pinkCollarFront from '../assets/pinkCollarFront.png'
import poison from '../assets/poison.png'

const HomeScreen = () => {

	[currentHealth, setCurrentHealth] = useState(5);
  	[currentMood, setCurrentMood] = useState(5);
	[wearingPinkCollar, setWearingPinkCollar] = useState(false);
	[wearingBlackCollar, setWearingBlackCollar] = useState(false);

	items = [
		{ name: 'Apple' , image: apple , healthEffect: 1, moodEffect:  0 },
		{ name: 'Bone'  , image: bone  , healthEffect:  3, moodEffect:  2 },
		{ name: 'Pink' , image: pinkCollar, clothing: true, clothesMood: 2},
		{ name: 'Spikes', image: collar, clothing: true, clothesMood: 2},
		{ name: 'Poison', image: poison , healthEffect: -5, moodEffect:  -5 }
	];

	/*
	 * Every 10 seconds
	 * Lower Health and 
	 * Mood by 1 point
	 */
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentHealth((prevHealth) => prevHealth - 1);
			setCurrentMood((prevMood) => prevMood - 1);
		}, 10_000);
		return () => clearInterval(interval);
	}, []);

	const determinePetImage = () => {
		if (currentHealth <= 1 || currentMood <= 1) {
		  return dogSad;
		} else if (currentMood <= 3 || currentHealth <= 3) {
		  return dogNeutral;
		} else {
		  return dogHappy;
		}
	};
	
	const handleItemPress = (item) => {
		if (item.healthEffect) {
			setCurrentHealth((prevHealth) => Math.max(0, Math.min(prevHealth + item.healthEffect, 5)));
		}
		if (item.moodEffect) {
			setCurrentMood((prevMood) => Math.max(0, Math.min(prevMood + item.moodEffect, 5)));
		}
		if (item.clothing) {
			if (item.name == "Pink") {
				
				if (wearingBlackCollar) 
					setWearingBlackCollar(false);

				if (!wearingPinkCollar) 
					setCurrentMood((prevMood) => Math.max(0, Math.min(prevMood + item.clothesMood, 5)));
				
				setWearingPinkCollar(!wearingPinkCollar);
			}

			if (item.name == "Spikes") {
				
				if (wearingPinkCollar) 
					setWearingPinkCollar(false);
	
				if (!wearingBlackCollar) 
					setCurrentMood((prevMood) => Math.max(0, Math.min(prevMood + item.clothesMood, 5)));
				
				setWearingBlackCollar(!wearingBlackCollar);
			}
		}
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
			
			{wearingPinkCollar && <Image source={pinkCollarFront} style={styles.collarStyle} />}
			{wearingBlackCollar && <Image source={collarCut} style={styles.collarStyle} />}

			<Inventory items={items} onItemPress={handleItemPress}/>
	
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgba(50, 130, 190, 0.4)'
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
	collarStyle: {
		height: 75, 
		width: 120, 
		position: 'absolute', 
		left: 95, 
		top: 185, 
		resizeMode: 'stretch', 
		transform: [{ rotate: '-15deg' }]
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