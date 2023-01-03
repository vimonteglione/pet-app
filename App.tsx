import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { Archivo_900Black, Archivo_700Bold } from "@expo-google-fonts/archivo";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";

import { Routes } from "./src/routes";

import { SignIn } from "./src/screens/SignIn";
import { Home } from "./src/screens/Home";

export default function App() {
    const [fontsLoaded] = useFonts({
        Archivo_900Black,
        Archivo_700Bold,
        Inter_400Regular,
        Inter_500Medium,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />
            <Routes />
        </>
    );
}
