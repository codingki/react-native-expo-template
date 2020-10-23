import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import base64 from 'base-64';
import { FontAwesome } from '@expo/vector-icons';
import Layout from './components/global/Layout';
export default function App() {
	const [loading, setLoading] = useState(false);

	// transactions data set to false first for the loading
	const [transactions, setTransactions] = useState(false);

	// on production dont place the server key here
	// dont forget add ":" in the end of the string
	const serverKey = 'YOURSERVERKEY:';
	const base64Key = base64.encode(serverKey);
	// order ID
	const orderID = 'YOUR-ORDERID-12351223';

	useEffect(() => {
		midtrans().then((data) => {
			// get the response and save it to the state
			setTransactions(data);
			// checking if the order already paid or not
			if (data.error_messages) {
				alert('This Order ID has been paid');
			}
		});
	}, []);

	async function midtrans(user) {
		// url for transactions
		// this url is for sandbox
		const url = 'https://app.sandbox.midtrans.com/snap/v1/transactions';
		// use this url for production : https://app.midtrans.com

		// transactions data
		const data = {
			transaction_details: {
				order_id: orderID,
				gross_amount: 60000,
			},
			item_details: [
				{
					id: 'ORDERID1',
					price: 20000,
					quantity: 1,
					name: 'Product 1',
					category: 'Clothes',
					merchant_name: 'Merchant',
				},
				{
					id: 'ORDERID2',
					price: 40000,
					quantity: 1,
					name: 'Product 2',
					category: 'Clothes',
					merchant_name: 'Merchant',
				},
			],
			credit_card: {
				secure: true,
			},
			customer_details: {
				first_name: 'budi',
				last_name: 'pratama',
				email: 'budi.pra@example.com',
				phone: '08111222333',
			},
		};

		// fetch data
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Basic ' + base64Key,
			},
			body: JSON.stringify(data),
		});
		return response.json();
	}

	async function getstatus() {
		// url for get the status of the transactions
		// this url is for sandbox
		const url = `https://api.sandbox.midtrans.com/v2/${orderID}/status`;

		// fetch data
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Basic ' + base64Key,
			},
		});
		return response.json();
	}

	function checkPayment() {
		setLoading(true);
		getstatus().then((data) => {
			if (data.status_code == 200) {
				console.log(data);
				setLoading(false);
				alert('This Order ID has been paid');
			} else {
				console.log(data);
				setLoading(false);
				alert('This Order ID has not been paid');
			}
		});
	}

	return (
		<Layout>
			{!transactions ? (
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<ActivityIndicator color="#fff" size="large" />
				</View>
			) : (
				<>
					<WebView
						source={{
							uri: transactions.redirect_url,
						}}
						style={{ flex: 1 }}
					/>

					<TouchableOpacity
						onPress={() => {
							checkPayment();
						}}
						style={{
							backgroundColor: '#3366FF',
							padding: 20,
							paddingVertical: 15,
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
						disabled={loading}
					>
						<Text
							style={{
								color: 'white',
								fontWeight: 'bold',
								fontSize: 18,
							}}
						>
							Cek Pembayaran
						</Text>
						{loading ? (
							<ActivityIndicator color="#fff" />
						) : (
							<FontAwesome name="check-square" size={20} color="white" />
						)}
					</TouchableOpacity>
				</>
			)}
		</Layout>
	);
}
