import PythonLogo from "../assets/python.png";
import LaTexLogo from "../assets/latex.png";
import ReactLogo from "../assets/react.png";
import InProgressLogo from "../assets/inProgress.png";

import { PythonCourse } from "../screens/Courses/PythonCourse";
import { LatexCourse } from "../screens/Courses/LaTeXCourse";

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
        component: LatexCourse,
    },
    {
        id: "3",
        title: "React Native",
        icon: InProgressLogo,
        level: "Avançado",
        component: PythonCourse,
    },
    {
        id: "3",
        title: "Eletrônica Analógica 2",
        icon: InProgressLogo,
        level: "Intermediário",
        component: PythonCourse,
    },
];
