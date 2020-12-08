import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './src/navigation';

import { AuthProvider } from './src/provider/AuthProvider';
export default function App() {
	const isLoadingComplete = useCachedResources();

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
