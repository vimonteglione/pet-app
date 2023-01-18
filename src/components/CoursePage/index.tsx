import React from "react";
import { useState } from "react";
import { Text, Image, View, ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import YoutubePlayer from "react-native-youtube-iframe";
import { styles } from "./styles";

type Props = {
    videoID: String;
    text: String;
};

export function CoursePage({ videoID, text, ...rest }: Props) {
    const [isReady, setIsReady] = useState(false);

    return (
        <View>
            <View
                style={
                    isReady
                        ? styles.frame
                        : [styles.frame, { backgroundColor: "white" }]
                }
            >
                <ActivityIndicator
                    style={
                        !isReady
                            ? styles.activity
                            : [styles.activity, { opacity: 0 }]
                    }
                />
                <YoutubePlayer
                    onReady={() => {
                        setIsReady(true);
                    }}
                    height={250}
                    videoId={videoID.toString()}
                />
            </View>
            <ScrollView contentContainerStyle={styles.conteudo}>
                <Text style={styles.conteudoText}>{text}</Text>
            </ScrollView>
        </View>
    );
}
