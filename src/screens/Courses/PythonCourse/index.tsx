import React from "react";
import { useState } from "react";
import { Text, Image, View, Button } from "react-native";
import { CoursePage } from "../../../components/CoursePage";
import { RectButton } from "react-native-gesture-handler";

import { styles } from "./styles";

import { coursePages } from "./coursePages";

import PythonLogo from "../../../assets/python.png";

export function PythonCourse() {
    const [currentPage, setCurrentPage] = useState(0);

    function handlePrev() {
        if (currentPage > 0) setCurrentPage(currentPage - 1);
    }

    function handleNext() {
        if (currentPage < coursePages.length - 1)
            setCurrentPage(currentPage + 1);
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonsHeader}>
                <RectButton
                    style={
                        currentPage > 0
                            ? styles.button
                            : [styles.button, { opacity: 0 }]
                    }
                    onPress={handlePrev}
                >
                    <Text style={styles.buttonText}>
                        {currentPage > 0
                            ? "< " + coursePages[currentPage - 1].title
                            : ""}
                    </Text>
                </RectButton>
                <RectButton
                    style={
                        currentPage < coursePages.length - 1
                            ? styles.button
                            : [styles.button, { opacity: 0 }]
                    }
                    onPress={handleNext}
                >
                    <Text style={styles.buttonText}>
                        {currentPage < coursePages.length - 1
                            ? coursePages[currentPage + 1].title + " >"
                            : ""}
                    </Text>
                </RectButton>
            </View>
            <View style={styles.header}>
                <Image source={PythonLogo} style={styles.image} />
                <Text style={styles.title}>
                    {currentPage + ". " + coursePages[currentPage].title}
                </Text>
            </View>
            <CoursePage
                videoID={coursePages[currentPage].videoId}
                text={coursePages[currentPage].text}
            />
        </View>
    );
}
