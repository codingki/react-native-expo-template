import React from 'react';
import Colors from '../../constants/Colors';
import Text from './StyledText';

interface Props {
	focused: boolean;
	title: string;
}

export default (props: Props) => {
	return (
		<Text
			bold
			style={{
				marginBottom: 5,
				color: props.focused ? Colors.ActiveTab : Colors.inActiveTab,
				fontSize: 10,
			}}
		>
			{props.title}
		</Text>
	);
};
