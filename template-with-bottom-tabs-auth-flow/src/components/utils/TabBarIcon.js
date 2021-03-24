import React from 'react';
import { theme } from 'react-native-rapi-ui';
import { Ionicons } from '@expo/vector-icons';
export default (props) => {
	return (
		<Ionicons
			name={props.icon}
			style={{ marginBottom: -7 }}
			size={24}
			color={props.focused ? theme.primary : 'rgb(143, 155, 179)'}
		/>
	);
};
