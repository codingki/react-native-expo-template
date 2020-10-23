import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';

const MainStack = createStackNavigator();

const Main = () => {
	return (
		<MainStack.Navigator
			screenOptions={{
				headerMode: 'none',
				headerShown: false,
			}}
		>
			<MainStack.Screen name="Home" component={Home} />
		</MainStack.Navigator>
	);
};

export default () => {
	return (
		<NavigationContainer>
			<Main />
		</NavigationContainer>
	);
};
