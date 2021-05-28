# Template bottom tabs with auth flow (Typescript)

Typescript Template starter with React Navigation Bottom Tabs and Supabase auth using React Context

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

### Supabase Setup

- Set up a new Supabase.io project
- Fill your supabase credentials to your config inside `./src/initSupabase.ts`
- You can find your supabase credentials in your project -> settings -> API

  ```jsx
  // Better put your these secret keys in .env file
  export const supabase = createClient(
  	"supabaseUrl", "supabaseKey",
  	{
  		localStorage: AsyncStorage as any,
  	}
  );
  ```

and you good to go!

### Prebuilt UI Screens

There are 3 screens included inside `./src/screens/auth` and one more thing its included with the supabase auth function, so you don't need to create the function. The ilustrations I use [undraw](https://undraw.co/)

- Login screen `./src/screens/auth/login.tsx`
- Register screen `./src/screens/auth/register.tsx`
- Forget password screen `./src/screens/auth/forget.tsx`

### React Navigation Auth Flow

The checking logged users process is inside `./src/provider/AuthProvider` I use React Context, you can add more functions like get the data of the user and store it to the context (better static data, ex: uid)

Inside the navigator `./src/navigation/AppNavigator.js`
There's 2 stack navigator :

- `<Auth/>` → for not logged in users stack
- `<Main/>` → for logged in users stack
- `<Loading/>` → when checking if the user is logged in or not loading screen

```jsx
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

# Rapi UI

![../media/hero.png](../media/hero.png)

These UI components are provided by [Rapi UI](https://rapi-ui.kikiding.space/).
Check the [documentation](https://rapi-ui.kikiding.space/docs/) for usage and more components.

# File Managements

These are the folders and the functionality all in `src/`

```jsx
/src/assets -> for media such as images, etc
/src/components -> for components
/src/navigation -> for React Navigation
/src/provider -> for React Context
/src/screens -> for Screens
/src/types -> for Types
```

if you find these useful don't forget to give it a star ⭐ and share it to your friends ❤️

Reach me on [twitter](https://twitter.com/kikiding/)
