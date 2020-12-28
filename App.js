import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, TextInput } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import PetsList from './PetsList'

export default function App() {
	return (
		<ScrollView style={styles.container}>
			<TextInput style={styles.text}><EvilIcons style={styles.search_icon} name="search" size={28} color="#5C0D74" /> Search here</TextInput>
			<PetsList />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 70,
		backgroundColor: '#F4EEF6'
	},

	text: {
		backgroundColor: 'white',
		borderRadius: 10,
		height: 40,
		marginHorizontal: 15,
		marginVertical: 25,
		paddingLeft: 10,
		fontSize: 20,
		justifyContent: "center",
		alignItems: "center"
	},

	search_icon: {
		justifyContent: 'center',
		alignItems: "center",
		marginTop: 2
	}
});
