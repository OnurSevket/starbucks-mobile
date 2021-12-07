import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// @ts-ignore
import { ThemeProvider } from 'styled-components';
import { theme } from "./src/styles/theme";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";


export default function App() {
    let [fontsLoaded] = useFonts({
        "Inter-Bold": require("./src/assets/fonts/Inter-Bold.ttf"),
        "Inter-Regular": require("./src/assets/fonts/Inter-Regular.ttf"),
        "Inter-Medium": require("./src/assets/fonts/Inter-Medium.ttf"),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }
  return (
      <ThemeProvider theme={theme}>
          <View style={styles.container}>
              <Text>Initial commit for Starbucks Mobile With React Native</Text>
              <StatusBar style="auto" />
          </View>
      </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
