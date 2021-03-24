import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Layout, theme } from 'react-native-rapi-ui';

export default function () {
	return (
		<Layout>
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<ActivityIndicator size="large" color={theme.primary} />
			</View>
		</Layout>
	);
}
