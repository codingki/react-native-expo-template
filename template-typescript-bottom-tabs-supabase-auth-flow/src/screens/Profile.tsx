import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { MainStackParamList } from '../types/navigation';
import { StackScreenProps } from '@react-navigation/stack';

import Layout from '../components/global/Layout';
import Text from '../components/utils/StyledText';
import Colors from '../constants/Colors';

export default function ({
	navigation,
}: StackScreenProps<MainStackParamList, 'MainTabs'>) {
	return (
		<Layout navigation={navigation}>
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{/* This text using ubuntu font */}
				<Text bold>This is Profile tab</Text>
				<Text>This tab not using Top navigation</Text>
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
			</View>
		</Layout>
	);
}
