import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import PokemonsList from './src/PokemonsList';
import Pokemon from './src/Pokemon';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// https://dribbble.com/shots/6563578-Pokedex-App-Animation
// https://dribbble.com/shots/6540871-Pokedex-App
// https://dribbble.com/shots/6545819-Pokedex-App

type RootStackParamList = {
  Pokedex: undefined;
  Pokemon: { id: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
	return (
		<PaperProvider>
			<NavigationContainer>
				<Stack.Navigator >
					<Stack.Screen
						name="Pokedex"
						component={PokemonsList}
						/>
					<Stack.Screen
						name="Pokemon"
						component={Pokemon}
						/>
				</Stack.Navigator>
			</NavigationContainer>
		</PaperProvider>
	);
}
