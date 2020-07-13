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
import pokemons from './pokemons';

interface Pokemons {
	results: PokemonListItem[];
}

interface PokemonListItem {
	name: String;
	url: String;
}

// #40A0CD
// #366FC6
// #3D3D38
// #E4362B
// #F7A61B
// #159F6E
// #B0B8C7
// #F5F6F7

export default function PokemonsList({ navigation }) {
	useEffect(() => {
		async function fetchPokemons(): Promise<any> {
			const { data } = await axios.get<Pokemons>(
				'https://pokeapi.co/api/v2/pokemon?limit=151',
			);

			// console.log(data.results);192.168.0.6:19000
		}

		fetchPokemons();
	}, []);

	function handlePress(id) {
		navigation.navigate('Pokemon', { id })
	}

	return (
		<View style={styles.container}>
			<FlatList
				numColumns={2}
				keyExtractor={({ id }) => id}
				data={pokemons}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={{ flex: 1, justifyContent: 'space-between' }}
						onPress={() => handlePress(item.id)}
					>
						<View style={[styles.card, styles[item.types[0].name]]}>
							<View style={styles.cardHeader}>
								<Text style={styles.cardTitle}>{item.name}</Text>
								{/* <Text style={styles.cardNumber}>#{item.id}</Text> */}
								<View>
									{item.types.map(type => (
										<Text style={styles.cardTag} key={type.id}>
											{type.name}
										</Text>
									))}
								</View>
							</View>
							<View style={styles.cardBody}>
								<Image
									style={{ width: 92, height: 92 }}
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
		flex: 1,
		backgroundColor: '#F5F6F7',
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
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	cardHeader: {
		// marginBottom: 8,
		// justifyContent: 'space-between',
	},
	cardBody: {
		// flexDirection: 'row',
		// justifyContent: 'space-between',
	},
	cardNumber: {
		color: '#F5F6F7',
		fontWeight: 'bold',
		fontSize: 18,
	},
	cardTitle: {
		color: '#F5F6F7',
		fontWeight: 'bold',
		fontSize: 18,
		marginBottom: 8,
	},
	cardTag: {
		backgroundColor: 'rgba(255,255,255,0.4)', 
		color: '#F5F6F7',
		borderRadius: 16,
		paddingVertical: 4,
		paddingHorizontal: 8,
		marginVertical: 2,
		textAlign: 'center',
	},
	grass: {
		backgroundColor: '#159F6E',
	},
	fire: {
		backgroundColor: '#f2665c',
	},
});
