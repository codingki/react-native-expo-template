import React from 'react';
import { View, Linking } from 'react-native';
import {
	Layout,
	TopNav,
	Text,
	Button,
	Section,
	SectionContent,
} from 'react-native-rapi-ui';

export default function ({ navigation }) {
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
				<Section>
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
					</SectionContent>
				</Section>
			</View>
		</Layout>
	);
}
