import axios from 'axios';
import React from 'react';
import {
	Image,
	StyleSheet,
	Text,
	View,
  ScrollView,
} from 'react-native';
import { ProgressBar } from 'react-native-paper';
import pokemons from './pokemons';

// #40A0CD
// #366FC6
// #3D3D38
// #E4362B
// #F7A61B
// #159F6E
// #B0B8C7
// #F5F6F7

const stylesBaseStats = StyleSheet.create({
	stat: {
    flex: 1,
    grap: 4,
    flexDirection: 'row'
  }, 
  title: {
    width: '25%',
    backgroundColor: 'cyan',
  },
  value: {
    width: '25%',
    backgroundColor: 'grey',
  },
  progress: {
    width: '40vh',
    backgroundColor: '#B0B8C7',
  },
});


const stats = [
  {name: 'HP', value: 45},
  {name: 'Attack', value: 60},
  {name: 'Defense', value: 48},
]

const BaseStats = () => {
  return (
    <View>
      {stats.map(({name, value}) => (
        <View key={name} style={stylesBaseStats.stat}>
          <Text style={stylesBaseStats.title}>{name}</Text>
          <Text style={stylesBaseStats.value}>{value}</Text>
          <ProgressBar 
            style={stylesBaseStats.progress} 
            color={value < 50 ? 'red' : 'green'} 
            progress={value/100} 
            accessibilityStates 
          />
        </View>
      ))}
    </View>
  )
}

export default function Pokemon({route}) {
  console.log(route.params.id);

  const pokemon = pokemons.find(({id}) => id === route.params.id);
	return (
		<View style={styles.container}>
			<View style={[styles.card, styles[pokemon.types[0].name]]}>
        <View style={styles.cardHeader}>
          <View>
            <Text style={styles.cardTitle}>{pokemon.name}</Text>
            <View style={styles.cardTags}>
              {pokemon.types.map(type => (
                <Text style={styles.cardTag} key={type.id}>
                  {type.name}
                </Text>
              ))}
            </View>
          </View>
          <Text style={styles.cardNumber}>#{pokemon.id}</Text>
        </View>
        <View style={styles.cardBody}>
          <Image
            style={{ width: 128, height: 128 }}
            source={{ uri: pokemon.img }}
          />
        </View>
      </View>
      <View style={styles.detail}>
        {/* <ScrollView 
          style={styles.detailWrapper} 
          horizontal 
          decelerationRate={0} 
          showsHorizontalScrollIndicator={false}
          snapToInterval={600 - 60}
          snapToAlignment={"center"}
        >
          <Text style={styles.pokemonDetails}>About</Text>
          <Text style={styles.pokemonDetails}>Base stats</Text>
          <Text style={styles.pokemonDetails}>Evolutions</Text>
          <Text style={styles.pokemonDetails}>Moves</Text>
        </ScrollView> */}
        <View style={styles.detailWrapper} >
          <View style={styles.detailMenu} >
            <Text style={styles.pokemonDetails}>About</Text>
            <Text style={styles.pokemonDetails}>Base stats</Text>
            <Text style={styles.pokemonDetails}>Evolutions</Text>
            <Text style={styles.pokemonDetails}>Moves</Text>
          </View>
          <BaseStats />
        </View>
      </View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5F6F7',
  },
  detail: {
    backgroundColor: '#159F6E'
  },
  detailWrapper: {
    padding: 16,
    backgroundColor: '#F5F6F7',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  detailMenu: {
    flexDirection: 'row',
  },
  pokemonDetails: {
    flex: 1
  },
	list: {
		backgroundColor: '#333',
	},
	card: {
		padding: 16,
		paddingBottom: 0,
		// flexDirection: 'row',
		// justifyContent: 'space-between',
	},
	cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
		// marginBottom: 8,
	},
	cardBody: {
    // flexDirection: 'row',
    alignItems: 'center'
		// justifyContent: 'space-between',
	},
	cardNumber: {
		color: '#F5F6F7',
		fontWeight: 'bold',
		fontSize: 14,
	},
	cardTitle: {
		color: '#F5F6F7',
		fontWeight: 'bold',
		fontSize: 18,
		marginBottom: 8,
	},
	cardTags: {
    flexDirection: 'row',
	},
	cardTag: {
		backgroundColor: 'rgba(255,255,255,0.4)', 
		color: '#F5F6F7',
		borderRadius: 16,
		paddingVertical: 4,
		paddingHorizontal: 8,
		textAlign: 'center',
	},
	grass: {
		backgroundColor: '#159F6E',
	},
	fire: {
		backgroundColor: '#f2665c',
	},
});
