import { supabase } from "./pages/initSupabase";

export async function getUserNames() {
	console.log("running")
	const { data } = await supabase.from("users").select();
	return data;
}

export async function getItem(item_name) {
	const { data } = await supabase.from("items").select().eq("item_name", item_name).single()
	return data
}

export async function getUser(user_id) {
	const { data } = await supabase.from("users").select().eq("id", user_id).single()
	return data
}


export async function getPetHappiness(pet_id) {
	const { data, error } = await supabase
	.from('pets')
	.select('happiness_level')
	.eq('pet_id', pet_id).single()

	return data.happiness_level;
	
}

export async function getPetHunger(pet_id) {
	const { data, error } = await supabase
	.from('pets')
	.select('hunger_level')
	.eq('pet_id', pet_id).single()

	return data.hunger_level;

}



export async function updatePetHappiness(pet_id, new_level) {
	// happiness_level = await getPetHappiness(pet_id)
	const { data, error } = await supabase
	.from('pets')
	.update({ "happiness_level": new_level })
	.eq('pet_id', pet_id)
	.select()
	if (error != null) {
		console.warn("error: "+ JSON.stringify(error))
	}

}


export async function updatePetHunger(pet_id, new_level) {
	// hunger_level = await getPetHunger(pet_id)
	// console.log("hunger level increase: "+hunger_level)
	const { data, error } = await supabase
	.from('pets')
	.update({ "hunger_level": new_level })
	.eq('pet_id', pet_id)
	.select()
	if (error != null) {
		console.warn("error: "+ JSON.stringify(error))
	}
}

export async function updateUser(user_id, new_user_data) {

	console.log("updating user")
	const { error } = await supabase
	.from('users')
	.update(new_user_data)
	.eq('id', user_id)
	
	if (error != null) {
		console.warn("error: "+ JSON.stringify(error))
	}
}

export async function updateCoins(user_id, new_coins) {
	// console.log("The number of coins after adding this task is: " + num_coins);
	await updateUser(user_id, { num_coins: new_coins })
}

export async function buyItem(user_id, item_name) {
	item_data = await getItem(item_name)
	user_data = await getUser(user_id)
	
	food = user_data.food
	clothes = user_data.clothes
	toys = user_data.toys

	console.log("food init: " + food)
	
	if (item_data.type == "food") {
		if (food == null) {
			food = [];
		}
		food.push(item_name);
		console.log("After buying item, this is food: " + food);
		await updateUser(user_id, {food: food, coins: user_data.coins - item_data.cost})
	} else if (item_data.type == "toy") {
		if (toys == null) {
			toys = [];
		}
		toys.push(item_name);
		console.log("After buying item, this is toys: " + toys);
		await updateUser(user_id, {toys: toys, coins: user_data.coins - item_data.cost})
	}
	else if (item_data.type == "clothing") {
		if (clothes == null) {
			clothes = [];
		}
		clothes.push(item_name);
		console.log("After buying item, this is clothes: " + clothes);
		await updateUser(user_id, {clothes: clothes, coins: user_data.coins - item_data.cost})
	}
	else {
		console.log(item_name + " not of correct type! It is" + item_data.type)
		return
	}
}
// buy items

export async function useItem(user_id, item_name) {

	item_data = await getItem(item_name)
	user_data = await getUser(user_id)

	food = user_data.food
	clothes = user_data.clothes
	toys = user_data.toys

  	console.log("food init: "+ food)

	if (food != undefined && food.includes(item_name)) {
		// console.log("found cookie!!!")
		let to_be_removed_index = food.indexOf(item_name);
		food.splice(to_be_removed_index,1);
		console.log("updated food: " + food);
		// food = food.filter(item => item !== item_name);
		await updateUser(user_id, {food: food});
	} else if (clothes != undefined && clothes.includes(item_name)) {
		let to_be_removed_index = clothes.indexOf(item_name);
		clothes.splice(to_be_removed_index,1);
		console.log("updated clothes: " + clothes);
		// clothes = clothes.filter(item => item !== item_name);
		await updateUser(user_id, {clothes: clothes});
	} else if (toys != undefined && toys.includes(item_name)) {
		let to_be_removed_index = toys.indexOf(item_name);
		toys.splice(to_be_removed_index,1);
		console.log("updated toys: " + toys);
		// toys = toys.filter(item => item !== item_name);
		await updateUser(user_id, {toys: toys})
	} else {
		console.log("item not in inventory")
		return
	}
}
