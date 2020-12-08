import React from 'react';
import { Text } from 'react-native';

interface Props {
	bold?: boolean | null;
	medium?: boolean | null;
	light?: boolean | null;
}
type TextProps = Props & Text['props'];

export default function (props: TextProps) {
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
