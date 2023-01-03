import React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import IllustrationImg from "../../../assets/IllustrationIMG.png";
import { Buttonicon } from "../../components/Buttonicon";
import { styles } from "./styles";

export function SignIn() {
    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate("Home");
    }

    return (
        <View style={styles.container}>
            <Image
                source={IllustrationImg}
                style={styles.image}
                resizeMode="stretch"
            />

            <View style={styles.content}>
                <Text style={styles.title}>{"\n\n"}Bem-vindo!</Text>
                <Text style={styles.subtitle}>
                    Confira os cursos desenvolvidos {"\n"}
                    pelo PET-TEC da Universidade Federal de Itajubá!{"\n"}
                </Text>

                <Buttonicon title="Descobrir" onPress={handleSignIn} />
            </View>
        </View>
    );
}
