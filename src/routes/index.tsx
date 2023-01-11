import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Background from "../components/background/background1";

const navTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "white",
    },
};

export function Routes() {
    return (
        <NavigationContainer theme={navTheme}>
            <AuthRoutes />
        </NavigationContainer>
    );
}
