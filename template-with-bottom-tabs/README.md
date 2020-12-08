# Template Bottom tabs

Template starter with React Navigation Bottom Tabs

# Preview

![../media/bottomtabs.gif](../media/bottomtabs.gif | width=200)

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

# Add Custom fonts to your project

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
    "@react-navigation/native": "^5.7.6",
    "@react-navigation/stack": "^5.9.3",
    "expo": "~39.0.2",
    "expo-status-bar": "~1.0.2",
    "firebase": "7.9.0",
    "lodash": "^4.17.20",
    "moment": "^2.29.1",
    "react": "16.13.1",
    "react-dom": "16.13.1",
    "react-native": "https://github.com/expo/react-native/archive/sdk-39.0.4.tar.gz",
    "react-native-gesture-handler": "~1.7.0",
    "react-native-reanimated": "~1.13.0",
    "react-native-safe-area-context": "3.1.4",
    "react-native-screens": "~2.10.1",
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
/screens -> for Screens
```

if you find these useful don't forget to give it a star ⭐ and share it to your friends ❤️

Reach me on [twitter](https://twitter.com/kikiding/)
