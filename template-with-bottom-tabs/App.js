import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { ThemeProvider, useTheme } from "react-native-rapi-ui";
export default function App() {
  const { setTheme } = useTheme();
  return (
    <ThemeProvider theme="light" setTheme={setTheme}>
      <AppNavigator />
    </ThemeProvider>
  );
}
