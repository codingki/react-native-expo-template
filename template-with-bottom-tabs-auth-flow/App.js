import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';
import { AuthProvider } from './src/provider/AuthProvider';
import { useCachedResources } from 'react-native-rapi-ui';

export default function App(props) {
	const isLoadingComplete = useCachedResources([
		require('./assets/icon.png'),
		require('./assets/splash.png'),
		require('./assets/login.png'),
		require('./assets/register.png'),
		require('./assets/forget.png'),
	]);

	if (!isLoadingComplete && !props.skipLoadingScreen) {
		return <AppLoading />;
	} else {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<StatusBar style="auto" translucent />
				<AuthProvider>
					<AppNavigator />
				</AuthProvider>
			</SafeAreaView>
		);
	}
}
