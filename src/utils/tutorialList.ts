import PythonLogo from "../assets/python.png";
import LaTexLogo from "../assets/latex.png";
import ReactLogo from "../assets/react.png";
import InProgressLogo from "../assets/inProgress.png";

import { PythonCourse } from "../screens/Courses/PythonCourse";
import { LatexCourse } from "../screens/Courses/LaTeXCourse";

export const tutorials = [
    {
        id: "1",
        title: "Estação Meteorológica ESP32",
        icon: InProgressLogo,
        level: "Intermediário",
        component: PythonCourse,
    },
    {
        id: "2",
        title: "Monitor Cardíaco ESP32",
        icon: InProgressLogo,
        level: "Avançado",
        component: LatexCourse,
    },
    {
        id: "3",
        title: "Histórico de Presença ESP32",
        icon: InProgressLogo,
        level: "Avançado",
        component: PythonCourse,
    },
    {
        id: "3",
        title: "Monitoramento de Sensor Touch",
        icon: InProgressLogo,
        level: "Avançado",
        component: PythonCourse,
    },
];
