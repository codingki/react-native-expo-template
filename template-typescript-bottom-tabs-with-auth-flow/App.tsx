import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCachedResources } from 'react-native-rapi-ui';
import Navigation from './src/navigation';

import { AuthProvider } from './src/provider/AuthProvider';
export default function App() {
	const isLoadingComplete = useCachedResources([
		require('./assets/images/login.png'),
		require('./assets/images/register.png'),
		require('./assets/images/forget.png'),
	]);

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<AuthProvider>
					<Navigation />
				</AuthProvider>
				<StatusBar />
			</SafeAreaView>
		);
	}
}
