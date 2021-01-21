import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { Asset } from 'expo-asset';
import {
	Ubuntu_300Light,
	Ubuntu_300Light_Italic,
	Ubuntu_400Regular,
	Ubuntu_400Regular_Italic,
	Ubuntu_500Medium,
	Ubuntu_500Medium_Italic,
	Ubuntu_700Bold,
	Ubuntu_700Bold_Italic,
} from '@expo-google-fonts/ubuntu';

export default function useCachedResources() {
	const [isLoadingComplete, setLoadingComplete] = React.useState(false);

	// Load any resources or data that we need prior to rendering the app
	React.useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				SplashScreen.preventAutoHideAsync();

				// Load fonts

				await Promise.all([
					Asset.loadAsync([
						require('../assets/images/login.png'),
						require('../assets/images/register.png'),
						require('../assets/images/forget.png'),
					]),
					Font.loadAsync({
						...Ionicons.font,
						Ubuntu_300Light,
						Ubuntu_300Light_Italic,
						Ubuntu_400Regular,
						Ubuntu_400Regular_Italic,
						Ubuntu_500Medium,
						Ubuntu_500Medium_Italic,
						Ubuntu_700Bold,
						Ubuntu_700Bold_Italic,
					}),
				]);
			} catch (e) {
				// We might want to provide this error information to an error reporting service
				console.warn(e);
			} finally {
				setLoadingComplete(true);
				SplashScreen.hideAsync();
			}
		}

		loadResourcesAndDataAsync();
	}, []);

	return isLoadingComplete;
}
