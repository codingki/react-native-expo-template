import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Layout from '../components/global/Layout';
import Text from '../components/utils/UbuntuFont';
export default function ({ navigation }) {
	return (
		<Layout navigation={navigation} title="Second Screen" withBack>
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{/* This text using ubuntu font */}
				<Text bold>This is the second screen</Text>
				<Text>The top navigation have back action</Text>
			</View>
		</Layout>
	);
}
