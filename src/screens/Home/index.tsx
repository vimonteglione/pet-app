import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./styles";

import petIcon from "../../../assets/logo.png";

import { CourseSelect } from "../../components/CourseSelect";

export function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={petIcon}
                    style={styles.image}
                    resizeMode="stretch"
                />
            </View>
            <View>
                <Text style={styles.title}>Nossos cursos</Text>
                <CourseSelect />
            </View>
        </View>
    );
}
