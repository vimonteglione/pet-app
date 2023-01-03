import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: 144,
        height: 205,
        marginRight: 14,
    },
    box: {
        width: 144,
        height: 158,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    content: {},
    image: {
        height: 50,
        width: 50,
    },
    title: {
        fontFamily: theme.fonts.title700,
        fontSize: 15,
        marginTop: 14,
        marginBottom: 8,
    },
    level: {
        fontFamily: theme.fonts.text400,
        fontSize: 12,
    },
});
