import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../../constants/Colors';
import TopNav from '../navigation/TopNav';

interface Props {
	title?: string | null;
	navigation?: any;
	children: React.ReactNode;
	withBack?: boolean;
}

export default function (props: Props) {
	return (
		<View style={styles.container}>
			{props.title && (
				<TopNav
					navigation={props.navigation}
					title={props.title}
					withBack={props.withBack ? true : false}
				/>
			)}
			{/* this text using ubuntu font */}
			{props.children}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: Colors.background,
	},
});
