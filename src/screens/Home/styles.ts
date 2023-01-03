import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: "100%",
        paddingHorizontal: 24,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: getStatusBarHeight() + 50,
        marginBottom: 42,
    },
    image: {
        width: 55,
        height: 50,
    },
    title: {
        fontFamily: theme.fonts.title900,
        fontSize: 24,
        marginLeft: 40,
    },
});
