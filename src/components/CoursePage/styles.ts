import { setStatusBarHidden } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    conteudo: {
        paddingBottom: 100,
    },
    conteudoText: {
        padding: 30,
        paddingBottom: 400,
        fontSize: 19,
        fontFamily: theme.fonts.text400,
    },
    frame: {},
    activity: {
        top: 100,
    },
});
