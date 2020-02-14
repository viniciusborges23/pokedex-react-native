import axios from 'axios';
import React, { useEffect } from 'react';
import {
	FlatList,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

interface Pokemons {
	results: PokemonListItem[];
}

interface PokemonListItem {
	name: String;
	url: String;
}

const pokemons = [
	{
		id: '001',
		name: 'Bulbasaur',
		img: 'https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png',
		types: [
			{ id: 1, name: 'grass' },
			{ id: 2, name: 'poison' },
		],
	},
	{
		id: '002',
		name: 'Ivysaur',
		img: 'https://cdn.bulbagarden.net/upload/7/73/002Ivysaur.png',
		types: [
			{ id: 1, name: 'grass' },
			{ id: 2, name: 'poison' },
		],
	},
	{
		id: '003',
		name: 'Venusaur',
		img: 'https://cdn.bulbagarden.net/upload/a/ae/003Venusaur.png',
		types: [
			{ id: 1, name: 'grass' },
			{ id: 2, name: 'poison' },
		],
	},
	{
		id: '004',
		name: 'Charmandar',
		img: 'https://cdn.bulbagarden.net/upload/7/73/004Charmander.png',
		types: [{ id: 1, name: 'fire' }],
	},
];

export default function PokemonsList() {
	useEffect(() => {
		async function fetchPokemons(): Promise<any> {
			const { data } = await axios.get<Pokemons>(
				'https://pokeapi.co/api/v2/pokemon?limit=151',
			);

			// console.log(data.results);192.168.0.6:19000
		}

		fetchPokemons();
	}, []);

	function handlePress() {
		console.log('oi');
	}

	return (
		<View style={styles.container}>
			{/* <Text>What pokemon are you loking for?</Text>
			<TextInput placeholder='Search pokemon, move, ability, etc' /> */}

			<FlatList
				numColumns={2}
				keyExtractor={({ id }) => id}
				data={pokemons}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={{ flex: 1, justifyContent: 'space-between' }}
						onPress={handlePress}
					>
						<View style={[styles.card, styles[item.types[0].name]]}>
							<View style={styles.cardHeader}>
								<Text style={styles.cardTitle}>{item.name}</Text>
								<Text style={styles.cardNumber}>#{item.id}</Text>
							</View>
							<View style={styles.cardBody}>
								<View>
									{item.types.map(type => (
										<Text style={styles.cardTag} key={type.id}>
											{type.name}
										</Text>
									))}
								</View>
								<Image
									style={{ width: 64, height: 64 }}
									source={{ uri: item.img }}
								/>
							</View>
						</View>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		backgroundColor: '#fff',
		paddingTop: 40,
		padding: 16,
		flexDirection: 'row',
	},
	list: {
		backgroundColor: '#333',
	},
	card: {
		padding: 8,
		margin: 4,
		borderRadius: 12,
	},
	cardHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	cardBody: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	cardNumber: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 18,
	},
	cardTitle: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 18,
	},
	cardTag: {
		backgroundColor: '#abebc7', // f29a94
		color: '#fff',
		borderRadius: 16,
		paddingVertical: 4,
		paddingHorizontal: 8,
		textAlign: 'center',
	},
	grass: {
		backgroundColor: '#6bd199',
	},
	fire: {
		backgroundColor: '#f2665c',
	},
});
