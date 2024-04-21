import { StyleSheet, Text, View, Image } from 'react-native'
import { React, useEffect, useState } from 'react';
import Inventory from '../components/Inventory';
import HealthBar from '../components/HealthBar';
import MoodBar from '../components/MoodBar';
import { getUser, getItem, useItem, getPetHappiness, getPetHunger, updatePetHappiness, updatePetHunger } from '../db_commands';

// Importing Dog States
import dogHappy from '../assets/dogHappy.png';
import dogSad from '../assets/dogSad.png';
import dogNeutral from '../assets/dogMeh.png';
// Importing foods
import apple from './assets/apple.png';
import poison from './assets/poison.png';
import bone from './assets/bone.png';
// Importing clothing
import black_hat from './assets/BlackHat.png';
import pink_collar from './assets/pinkCollar.png';
import collar from './assets/collar.png';
import collarCut from '../assets/collarCut.png';
import pinkCollarFront from '../assets/pinkCollarFront.png'

const HomeScreen = () => {

	[currentHealth, setCurrentHealth] = useState(0);
  	[currentMood, setCurrentMood] = useState(0);
	[pet, setPet] = useState(0);
	[items, setItems] = useState([]);
	[coins, setCoins] = useState(0);
	[wearingPinkCollar, setWearingPinkCollar] = useState(false);
	[wearingBlackCollar, setWearingBlackCollar] = useState(false);

	async function getCoins() {
		setCoins((await getUser(2)).num_coins);
	}
	
	async function getUserPetStats() {
		const user = await getUser(2);
		setPet(user.pet);
		const petHappiness = await getPetHappiness(user.pet);
		const petHunger = await getPetHunger(user.pet);
		setCurrentMood(petHappiness);
		setCurrentHealth(petHunger);
	}

	async function setUserInventoryAndMood() {
		const user = await getUser(2);
		// console.log("Inside getAllUserInfo: ", user.food.concat(user.clothes, user.toys))
		if (user.food != null) {
			const item_names = user.food.concat(user.clothes, user.toys);
			let tmp_items = [];
			for (const item of item_names) {
				var item_data;
				if (item != null) {
					console.log('Item name is: ', item)
					item_data = await getItem(item);
					switch(item) {
						case "poison":
							tmp_items.push({
								name: item, image: poison, type: item_data.type, 
								healthEffect: item_data.hunger_level, moodEffect: item_data.happiness_level
							});
							break;
						case "bone":
							tmp_items.push({
								name: item, image: bone, type: item_data.type, 
								healthEffect: item_data.hunger_level, moodEffect: item_data.happiness_level
							});
							break;
						case "apple":
							tmp_items.push({
								name: item, image: apple, type: item_data.type, 
								healthEffect: item_data.hunger_level, moodEffect: item_data.happiness_level
							});
							break;
						case "BlackHat":
							tmp_items.push({
								name: item, image: black_hat, type: item_data.type, 
								healthEffect: item_data.hunger_level, moodEffect: item_data.happiness_level
							});
							break;
						case "pinkCollar":
							tmp_items.push({
								name: item, image: pink_collar, type: item_data.type, 
								healthEffect: item_data.hunger_level, moodEffect: item_data.happiness_level
							});
							break;
						case "collar":
							tmp_items.push({
								name: item, image: collar, type: item_data.type, 
								healthEffect: item_data.hunger_level, moodEffect: item_data.happiness_level
							});
							break;
					}
				}
			}
			// console.log("Inside getAllUserInfo: we have items", tmp_items)
			setItems(tmp_items);
		}
	};

	/*
	 * Every 30 seconds
	 * Lower Health and 
	 * Mood by 1 point
	 */
	useEffect(() => {
		getCoins();
		getUserPetStats();
		setUserInventoryAndMood();
		// console.log('Current Inventory: ', inventory);
		const interval = setInterval(async () => {
			if (currentHealth > 0 && currentMood > 0) {
				let updatedHealth = currentHealth - 1;
				let updatedMood = currentMood - 1;
				await updatePetHappiness(pet, updatedMood);
				setCurrentMood(updatedMood);
				await updatePetHunger(pet, updatedHealth);
				setCurrentHealth(updatedHealth);
			} else if (currentHealth > 0) {
				let updatedHealth = currentHealth - 1;
				await updatePetHunger(pet, updatedHealth);
				setCurrentHealth(updatedHealth);
			} else if (currentMood > 0) { // currentMood > 0
				let updatedMood = currentMood - 1;
				await updatePetHappiness(pet, updatedMood);
				setCurrentMood(updatedMood);
			} else { } // do nothing bc both are below zero
		}, 45_000);
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
	
	const handleItemPress = async (item) => {
		let updatedHealth = currentHealth;
		let updatedMood = currentMood;
		if (item.type == "clothing") {
			if (item.name == "pinkCollar") {
				if (wearingBlackCollar) 
					setWearingBlackCollar(false);
				if (!wearingPinkCollar) {
					updatedMood = Math.max(0, Math.min(currentMood + item.moodEffect, 5));
					setCurrentMood(updatedMood);
					await updatePetHappiness(pet, updatedMood);
				}
				setWearingPinkCollar(!wearingPinkCollar);
			}
			if (item.name == "collar") {
				if (wearingPinkCollar) 
					setWearingPinkCollar(false);
				if (!wearingBlackCollar) {
					updatedMood = Math.max(0, Math.min(currentMood + item.moodEffect, 5));
					setCurrentMood(updatedMood);
					await updatePetHappiness(pet, updatedMood);
				}
				setWearingBlackCollar(!wearingBlackCollar);
			}
			if (item.name == "BlackHat") {
				// TODO: do same as above with adding on the blackHat onto the dog image
				updatedMood = Math.max(0, Math.min(currentMood + item.moodEffect, 5));
				setCurrentMood(updatedMood);
				await updatePetHappiness(pet, updatedMood);
			}
		} else {
			if (item.healthEffect) {
				updatedHealth = Math.max(0, Math.min(currentHealth + item.healthEffect, 5));
				console.log("The current health after poison is: ", updatedHealth);
				await updatePetHunger(pet, updatedHealth);
				setCurrentHealth(updatedHealth);
			}
			if (item.moodEffect) {
				updatedMood = Math.max(0, Math.min(currentMood + item.moodEffect, 5));
				await updatePetHappiness(pet, updatedMood);
				setCurrentMood(updatedMood);
			}
		}

		// removing the item from the inventory after using them
		const newItems = items.filter(i => i !== item);
		setItems(newItems);
		await useItem(2, item.name);
	};

	return (
		<View style={styles.container}>
			<View style={styles.circleContainer}>
        		<View style={[styles.circle, { top: 500, right: 50 }]} />
        		<View style={[styles.circle, { bottom: 30, left: 15 }]} />
				<View style={[styles.dropShadow, { bottom: 330, left: 140 }]} />
      		</View>
			<Text style={styles.coinText}>{coins} coins</Text>
			{/* <Text>User 2 Has {coins}.</Text> */}
			<HealthBar health={currentHealth} />
			<MoodBar mood={currentMood} />

			<Image source={determinePetImage()} style={styles.petImage} />
			
			{wearingPinkCollar && <Image source={pinkCollarFront} style={styles.collarStyle} />}
			{wearingBlackCollar && <Image source={collarCut} style={styles.collarStyle} />}
			{/* TODO: black_hat statement similar as above */}

			<Inventory items={items} onItemPress={handleItemPress}/>
	
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgba(50, 130, 190, 0.4)'
	},
	coinText: {
		fontSize : 20,
		fontWeight: 'bold',
		color: 'black',
		opacity: 0.75,
		position: 'absolute',
		top: 20,
		left: 15,
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