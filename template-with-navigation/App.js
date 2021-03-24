import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';
import { useCachedResources } from 'react-native-rapi-ui';

export default function App(props) {
	const isLoadingComplete = useCachedResources();

	if (!isLoadingComplete && !props.skipLoadingScreen) {
		return <AppLoading />;
	} else {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<StatusBar style="auto" translucent />
				<AppNavigator />
			</SafeAreaView>
		);
	}
}
