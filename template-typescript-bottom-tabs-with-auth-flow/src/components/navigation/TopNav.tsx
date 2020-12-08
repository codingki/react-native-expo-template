import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Text from '../utils/StyledText';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

interface Props {
	withBack?: boolean;
	title: string;
	navigation: any;
}

export default function (props: Props) {
	return (
		<View>
			<View
				style={{
					paddingHorizontal: 20,
					height: 64,
					flexDirection: 'row',
					justifyContent: 'space-between',
					backgroundColor: '#fff',
					alignItems: 'center',
					borderColor: '#c0c0c0',
					borderBottomWidth: 1,
				}}
			>
				{props.withBack ? (
					<TouchableOpacity
						onPress={() => {
							props.navigation.goBack();
						}}
						style={{
							flex: 1,
							alignItems: 'flex-start',
							justifyContent: 'center',
						}}
					>
						<Ionicons name="ios-arrow-back" size={24} color="#000" />
					</TouchableOpacity>
				) : (
					<View style={{ flex: 1, alignItems: 'flex-start' }} />
				)}

				<View
					style={{
						alignItems: 'center',
						flex: 5,
						flexDirection: 'row',
						justifyContent: 'center',
					}}
				>
					<Text
						bold
						style={{
							color: Colors.topNavText,
							fontSize: 16,
						}}
					>
						{props.title}
					</Text>
				</View>
				<View
					style={{
						alignItems: 'flex-end',
						flex: 1,
						justifyContent: 'center',
					}}
				></View>
			</View>
		</View>
	);
}
