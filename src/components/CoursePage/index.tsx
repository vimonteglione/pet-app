import React from "react";
import { Text, Image, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { styles } from "./styles";

type Props = {
    videoID: String;
    text: String;
};

export function CoursePage({ videoID, text, ...rest }: Props) {
    return (
        <View>
            <YoutubePlayer height={300} videoId={videoID.toString()} />
            <Text style={styles.conteudo}>{text}</Text>
        </View>
    );
}
