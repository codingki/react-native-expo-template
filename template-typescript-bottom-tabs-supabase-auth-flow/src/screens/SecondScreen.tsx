import React from 'react';
import { View } from 'react-native';
import { MainStackParamList } from '../types/navigation';
import { StackScreenProps } from '@react-navigation/stack';

import Layout from '../components/global/Layout';
import Text from '../components/utils/StyledText';

export default function ({
	navigation,
}: StackScreenProps<MainStackParamList, 'SecondScreen'>) {
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
