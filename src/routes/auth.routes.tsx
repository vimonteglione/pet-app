import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";
import { PythonCourse } from "../screens/Courses/PythonCourse";

import { courses } from "../utils/courseList";
import { tutorials } from "../utils/tutorialList";
import { materials } from "../utils/materialList";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="SignIn" component={SignIn} />
            <Screen name="Home" component={Home} />

            {/* Generate a map for the list courseList.ts to generate a Screen for each course */}
            <>
                {courses.map((course) => (
                    <Screen
                        key={course.id}
                        name={course.title}
                        component={course.component}
                    />
                ))}
                {tutorials.map((course) => (
                    <Screen
                        key={course.id}
                        name={course.title}
                        component={course.component}
                    />
                ))}
                {materials.map((course) => (
                    <Screen
                        key={course.id}
                        name={course.title}
                        component={course.component}
                    />
                ))}
            </>
        </Navigator>
    );
}
