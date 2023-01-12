import PythonLogo from "../assets/python.png";
import LaTexLogo from "../assets/latex.png";
import ReactLogo from "../assets/react.png";

import { PythonCourse } from "../screens/Courses/PythonCourse";

export const courses = [
    {
        id: "1",
        title: "Python",
        icon: PythonLogo,
        level: "Iniciante",
        component: PythonCourse,
    },
    {
        id: "2",
        title: "LaTeX",
        icon: LaTexLogo,
        level: "Intermediário",
        component: PythonCourse,
    },
    {
        id: "3",
        title: "React Native",
        icon: ReactLogo,
        level: "Avançado",
        component: PythonCourse,
    },
];
