import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function (props) {
	return (
		<SafeAreaView
			style={{
				flex: 1,
			}}
		>
			<StatusBar style="auto" translucent />
			<View style={styles.container}>{props.children}</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#f7f7f7',
	},
});
