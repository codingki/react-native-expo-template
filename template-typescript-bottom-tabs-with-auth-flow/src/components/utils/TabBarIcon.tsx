import React from 'react';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

interface Props {
	focused: boolean;
	icon: string;
}

export default (props: Props) => {
	return (
		<Ionicons
			name={props.icon}
			style={{ marginBottom: -7 }}
			size={24}
			color={props.focused ? Colors.ActiveTab : Colors.inActiveTab}
		/>
	);
};
