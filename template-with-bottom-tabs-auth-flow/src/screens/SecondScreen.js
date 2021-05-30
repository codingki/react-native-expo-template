import React from "react";
import { View } from "react-native";
import { Layout, TopNav, Text, themeColor } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  return (
    <Layout>
      <TopNav
        middleContent="Second Screen"
        leftContent={
          <Ionicons name="chevron-back" size={20} color={themeColor.black} />
        }
        leftAction={() => navigation.goBack()}
      />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* This text using ubuntu font */}
        <Text fontWeight="bold">This is the second screen</Text>
      </View>
    </Layout>
  );
}
