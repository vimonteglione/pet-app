import React from "react";
import { View, Image, Text, ImageURISource } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = RectButtonProps & {
    title: String;
    icon: ImageURISource;
    level: String;
};

export function CourseButton({ title, icon, level, ...rest }: Props) {
    var color1 = "";
    var color2 = "";

    if (level === "Iniciante") {
        color1 = theme.colors.background1;
        color2 = theme.colors.background1grad;
    } else if (level === "Intermediário") {
        color1 = theme.colors.background2;
        color2 = theme.colors.background2grad;
    } else if (level === "Avançado") {
        color1 = theme.colors.background3grad;
        color2 = theme.colors.background3grad;
    }

    const navigation = useNavigation();

    function handleNavigate() {
        navigation.navigate(title);
    }

    return (
        <RectButton {...rest} style={styles.container} onPress={handleNavigate}>
            <LinearGradient style={styles.box} colors={[color1, color2]}>
                <View style={styles.content}>
                    <Image source={icon} style={styles.image} />
                </View>
            </LinearGradient>
            <Text style={styles.title}>{title}</Text>
            <Text style={[styles.level, { color: color1 }]}>{level}</Text>
        </RectButton>
    );
}
