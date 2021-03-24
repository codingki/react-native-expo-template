import React from 'react';
import { View } from 'react-native';
import { Layout, TopNav, Text, theme } from 'react-native-rapi-ui';
import { Ionicons } from '@expo/vector-icons';

export default function ({ navigation }) {
	return (
		<Layout>
			<TopNav
				middleContent="Second Screen"
				leftContent={
					<Ionicons name="chevron-back" size={20} color={theme.black} />
				}
				leftAction={() => navigation.goBack()}
			/>
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{/* This text using ubuntu font */}
				<Text fontWeight="bold">This is the second screen</Text>
			</View>
		</Layout>
	);
}
