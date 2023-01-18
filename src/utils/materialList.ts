import PythonLogo from "../assets/python.png";
import LaTexLogo from "../assets/latex.png";
import ReactLogo from "../assets/react.png";
import InProgressLogo from "../assets/inProgress.png";

import { PythonCourse } from "../screens/Courses/PythonCourse";
import { LatexCourse } from "../screens/Courses/LaTeXCourse";

export const materials = [
    {
        id: "1",
        title: "Introdução à Programação Embarcada",
        icon: InProgressLogo,
        level: "Iniciante",
        component: PythonCourse,
    },
    {
        id: "2",
        title: "Introdução à Eletrônica Analógica",
        icon: InProgressLogo,
        level: "Avançado",
        component: LatexCourse,
    },
    {
        id: "3",
        title: "Materiais Didáticos de Apoios a Aprendizagem",
        icon: InProgressLogo,
        level: "Avançado",
        component: PythonCourse,
    },
];
