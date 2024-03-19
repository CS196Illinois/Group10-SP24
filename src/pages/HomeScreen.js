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
		setNames(data);
	}
	return (
		<ul>
		{usernames.map((user) => (
			<li key={user.user_name}>{user.user_name}, {user.num_coins}</li>
		))}
		</ul>
	)
}

export default HomeScreen

const styles = StyleSheet.create({})