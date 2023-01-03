import React from "react";
import { Text, Image, ScrollView } from "react-native";

import { styles } from "./styles";

import { courses } from "../../utils/courses";
import { Course } from "../Course";

export function CourseSelect() {
    return (
        <ScrollView
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ padding: 40 }}
        >
            {courses.map((course) => (
                <Course
                    key={course.id}
                    title={course.title}
                    icon={course.icon}
                    level={course.level}
                ></Course>
            ))}
        </ScrollView>
    );
}
