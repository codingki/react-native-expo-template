import React from 'react';
import { Text, theme } from 'react-native-rapi-ui';

interface Props {
	focused: boolean;
	title: string;
}

export default (props: Props) => {
	return (
		<Text
			fontWeight="bold"
			style={{
				marginBottom: 5,
				color: props.focused ? theme.primary : 'rgb(143, 155, 179)',
				fontSize: 10,
			}}
		>
			{props.title}
		</Text>
	);
};
