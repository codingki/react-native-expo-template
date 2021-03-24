import React from 'react';
import { View, Linking } from 'react-native';
import * as firebase from 'firebase';
import { MainStackParamList } from '../types/navigation';
import { StackScreenProps } from '@react-navigation/stack';
import {
	Layout,
	Button,
	Text,
	TopNav,
	Section,
	SectionContent,
} from 'react-native-rapi-ui';

export default function ({
	navigation,
}: StackScreenProps<MainStackParamList, 'MainTabs'>) {
	return (
		<Layout>
			<TopNav middleContent="Home" />
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Section style={{ marginTop: 20 }}>
					<SectionContent>
						<Text fontWeight="bold" style={{ textAlign: 'center' }}>
							These UI components provided by Rapi UI
						</Text>
						<Button
							style={{ marginTop: 10 }}
							text="Rapi UI Documentation"
							status="info"
							onPress={() => Linking.openURL('https://rapi-ui.kikiding.space/')}
						/>
						<Button
							text="Go to second screen"
							onPress={() => {
								navigation.navigate('SecondScreen');
							}}
							style={{
								marginTop: 10,
							}}
						/>
						<Button
							status="danger"
							text="Logout"
							onPress={() => {
								firebase.auth().signOut();
							}}
							style={{
								marginTop: 10,
							}}
						/>
					</SectionContent>
				</Section>
			</View>
		</Layout>
	);
}
