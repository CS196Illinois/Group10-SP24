import { StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react';
import { supabase } from './initSupabase';
import { getUserNames, useItem } from '../db_commands';

import React from 'react';

const HomeScreen = () => {
	const [usernames, setNames] = useState([]);

	useEffect(() => {
		updateUserNames();
	}, []);

	async function updateUserNames() {
        const data = await getUserNames();
		setNames(data);

        await useItem(2, "cookie");
	}
	return (
		<View>
		{usernames.map((user) => (
			<Text key={user.user_name}>{user.user_name}, {user.num_coins}, {JSON.stringify(user.food)}</Text>
		))}
		</View>
	)
}

export default HomeScreen

const styles = StyleSheet.create({})