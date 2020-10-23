import React from 'react';
import { Text } from 'react-native';

export default function (props) {
	return (
		<Text
			{...props}
			style={[
				props.style,
				{
					fontFamily: props.bold
						? 'Ubuntu_700Bold'
						: props.medium
						? 'Ubuntu_500Medium'
						: props.light
						? 'Ubuntu_300Light'
						: 'Ubuntu_400Regular',
				},
			]}
		/>
	);
}
