import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { theme } from "../../../global/styles/theme";

type Props = {
    children: ReactNode;
};

export default function Background({ children }: Props) {
    const { background1, background1grad } = theme.colors;
    return (
        <LinearGradient
            style={styles.container}
            colors={[background1, background1grad]}
        >
            {children}
        </LinearGradient>
    );
}
