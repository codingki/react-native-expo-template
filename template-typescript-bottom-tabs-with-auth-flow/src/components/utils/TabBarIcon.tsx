import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { theme } from 'react-native-rapi-ui';

interface Props {
	focused: boolean;
	icon: any;
}

export default (props: Props) => {
	return (
		<Ionicons
			name={props.icon}
			style={{ marginBottom: -7 }}
			size={24}
			color={props.focused ? theme.primary : 'rgb(143, 155, 179)'}
		/>
	);
};
