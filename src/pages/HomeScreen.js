import { StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react';
import { supabase } from './initSupabase';

import React from 'react';

const HomeScreen = () => {
	const [usernames, setNames] = useState([]);

	useEffect(() => {
		getUserNames();
	}, []);

	async function getUserNames() {
		const { data } = await supabase.from("users").select();
		// usernames = data;
		setNames(data);
	}
	return (
		<View>
		{usernames.map((user) => (
			<Text key={user.user_name}>{user.user_name}, {user.num_coins}</Text>
		))}
		</View>
	)
}

export default HomeScreen

const styles = StyleSheet.create({})