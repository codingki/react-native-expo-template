import React from "react";
import Navigation from "./src/navigation";
import { AuthProvider } from "./src/provider/AuthProvider";
import { ThemeProvider } from "react-native-rapi-ui";

export default function App() {
  const images = [
    require("./assets/images/login.png"),
    require("./assets/images/register.png"),
    require("./assets/images/forget.png"),
  ];

  return (
    <ThemeProvider theme="dark" images={images}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </ThemeProvider>
  );
}
