import React from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	View,
	ActivityIndicator,
} from 'react-native';
import Layout from '../../components/global/Layout';
import Colors from '../../constants/Colors';

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
				<ActivityIndicator size="large" color={Colors.primary} />
			</View>
		</Layout>
	);
}
