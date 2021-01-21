# Template Bottom tabs with auth flow

Template starter with React Navigation Bottom Tabs and Firebase auth using React Context

# Preview

![../media/authflow.png](../media/authflow.png)

# Installation

1. Install [node.js](https://nodejs.org/en/)
2. Install Expo

   ```jsx
   npm install --global expo-cli
   ```

3. Download this repo
4. Install deps on your template folder

   ```jsx
   npm install
   ```

5. Start the environtment

   ```jsx
   expo start
   ```

# Auth Flow

### Usage

- Set up a new firebase project
- Go to Authentication and under Sign-in Method enable Email/Password
- Fill this firebase config to your config inside `./navigation/AppNavigator.js`

      ```jsx
      const firebaseConfig = {
      	apiKey: '',
      	authDomain: '',
      	databaseURL: '',
      	projectId: '',
      	storageBucket: '',
      	messagingSenderId: '',
      	appId: '',
      };
      ```

  and you good to go!

### Prebuilt UI Screens

There are 3 screens included inside `./screens/auth` and one more thing its included with the firebase auth function, so you don't need to create the function. The ilustrations I use [undraw](https://undraw.co/)

- Login screen `./screens/auth/login.js`
- Register screen `./screens/auth/register.js`
- Forget password screen `./screens/auth/forget.js`

I personally use these screens on my project [TiktTeng](https://github.com/codingki/TikTeng) in early stages before the redesign, feel free to use these screens ❤️

### React Navigation Auth Flow

The checking logged users process is inside `./provider/AuthProvider` I use React Context, you can add more functions like get the data of the user and store it to the context (better static data, ex: uid)

Inside the navigator `./navigation/AppNavigator.js`
There's 2 stack navigator :

- `<Auth/>` → for not logged in users stack
- `<Main/>` → for logged in users stack
- `<Loading/>` → for loading screen

```
export default () => {
	const auth = useContext(AuthContext);
	const user = auth.user;
	return (
		<NavigationContainer>
			{user == null && <Loading />}
			{user == false && <Auth />}
			{user == true && <Main />}
		</NavigationContainer>
	);
};

```

# Custom Components

## Layout

|     props      |  required  |                                  value                                  |
| :------------: | :--------: | :---------------------------------------------------------------------: |
| **navigation** |   `true`   |                           **navigation prop**                           |
|   **title**    | `optional` |      **string** <br> null/false → Top bar navigation not appeared       |
|  **withBack**  | `optional` | **boolean** <br> true → back icon with back to previous screen function |

```jsx
import Layout from '../components/global/Layout';
export default function ({ navigation }) {
	return (
		<Layout navigation="{navigation}" title="Home">
			{/* put your content here */}
		</Layout>
	);
}
```

## Add Custom fonts to your project

> Custom font I used in this template is "Ubuntu" (Google fonts)

1. Find your google fonts [here](https://directory.now.sh/)
2. Install the font

   ```jsx
   expo install @expo-google-fonts/YOUR_CHOICE expo-font
   ```

3. Add to your project. Example in App.js

   ```jsx
   ...
   import {
   	Ubuntu_300Light,
   	Ubuntu_300Light_Italic,
   	Ubuntu_400Regular,
   	Ubuntu_400Regular_Italic,
   	Ubuntu_500Medium,
   	Ubuntu_500Medium_Italic,
   	Ubuntu_700Bold,
   	Ubuntu_700Bold_Italic,
   } from '@expo-google-fonts/ubuntu';

   ...

   ...
   	async function loadResourcesAsync() {
   		...
   		Font.loadAsync({
   			Ubuntu_300Light,
   			Ubuntu_300Light_Italic,
   			Ubuntu_400Regular,
   			Ubuntu_400Regular_Italic,
   			Ubuntu_500Medium,
   			Ubuntu_500Medium_Italic,
   			Ubuntu_700Bold,
   			Ubuntu_700Bold_Italic,
   			}),
   		]);
   	}
   	...
   ...
   ```

4. Edit the Custom Font component
5. Edit the font family

   ```jsx
   <Text
   	{...props}
   		style={[props.style,
   			{
   				fontFamily: props.bold
   				? 'Ubuntu_700Bold' <-- EDIT THIS
   				: props.medium
   				? 'Ubuntu_500Medium' <-- EDIT THIS
   				: props.light
   				? 'Ubuntu_300Light' <-- EDIT THIS
   				: 'Ubuntu_400Regular' <-- EDIT THIS
   			},
   		]}
   />
   ```

# Package used

```jsx
"dependencies": {
    "@expo-google-fonts/ubuntu": "^0.1.0",
    "@react-native-community/masked-view": "0.1.10",
    "@react-navigation/bottom-tabs": "^5.10.2",
    "@react-navigation/native": "^5.7.6",
    "@react-navigation/stack": "^5.9.3",
    "expo": "^40.0.0",
    "expo-app-loading": "^1.0.1",
    "expo-status-bar": "~1.0.3",
    "firebase": "7.9.0",
    "lodash": "^4.17.20",
    "moment": "^2.29.1",
    "react": "16.13.1",
    "react-dom": "16.13.1",
    "react-native": "https://github.com/expo/react-native/archive/sdk-40.0.1.tar.gz",
    "react-native-gesture-handler": "~1.8.0",
    "react-native-reanimated": "~1.13.0",
    "react-native-safe-area-context": "3.1.9",
    "react-native-screens": "~2.15.0",
    "react-native-web": "~0.13.12"
  }
```

# File Managements

These are the folders and the functionality

```jsx
/assets -> for media such as images, etc
/components -> for components
|___ /global -> Global components
|___ /navigation -> Navigation components
|___ /utils -> Utility components
/constants -> for Constants variable
/navigation -> for React Navigation
/provider -> for React Context
/screens -> for Screens
```

if you find these useful don't forget to give it a star ⭐ and share it to your friends ❤️

Reach me on [twitter](https://twitter.com/kikiding/)
