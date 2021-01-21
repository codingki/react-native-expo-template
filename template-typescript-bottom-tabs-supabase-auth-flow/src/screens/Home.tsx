import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MainStackParamList } from '../types/navigation';
import { StackScreenProps } from '@react-navigation/stack';
import { supabase } from '../initSupabase';
import Layout from '../components/global/Layout';
import Text from '../components/utils/StyledText';
import Colors from '../constants/Colors';

export default function ({
	navigation,
}: StackScreenProps<MainStackParamList, 'MainTabs'>) {
	return (
		<Layout navigation={navigation} title="Home">
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{/* This text using ubuntu font */}
				<Text bold>Hello World</Text>
				<Text>This text using ubuntu font</Text>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('SecondScreen');
					}}
					style={{
						backgroundColor: Colors.primary,
						padding: 10,
						paddingHorizontal: 20,
						marginTop: 10,
						borderRadius: 10,
					}}
				>
					<Text style={{ color: 'white' }} bold>
						Go to second screen
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={async () => {
						const { error } = await supabase.auth.signOut();
						if (!error) {
							alert('Signed out!');
						}
						if (error) {
							alert(error.message);
						}
					}}
					style={{
						backgroundColor: '#FF3A3A',
						padding: 10,
						paddingHorizontal: 20,
						marginTop: 10,
						borderRadius: 10,
					}}
				>
					<Text style={{ color: 'white' }} bold>
						Logout
					</Text>
				</TouchableOpacity>
			</View>
		</Layout>
	);
}
