import { setStatusBarHidden } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    conteudo: {
        padding: 30,
        fontSize: 18,
        fontFamily: theme.fonts.text400,
    },
});
