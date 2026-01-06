import { useNavigate } from "react-router-dom";
import { type IconItem, type LinkedIconItem, type LinkItem, type ProyectItem, type SkillList, type TimeItem } from "../../../domain";

export function ViewModel() {

    const navigate = useNavigate();

    const iconHeader: string = "terminal";
    const headerLinks: LinkItem[] = [
        { text: "Sobre mí", link: "about" },
        { text: "Proyectos", link: "proyects" },
        { text: "Formación", link: "education" }
    ]

    const nameTitle: string = "Julián Torres Sorcini";
    const functionTittle: string = "Estudiante de ingeniería en sistemas -> Desarrollador de software";
    const linkedIconItems: LinkedIconItem[] = [
        { text: "LinkedIn", icon: "linkedin", link: "linkedin" },
        { text: "Mi repositorio", icon: "github", link: "github" }
    ];
    const iconItems: IconItem[] = [
        { text: "Argentina -> Córdoba -> Córdoba capital", icon: "pin" },
        { text: "juliantorresssr@gmail.com", icon: "mail" }
    ];

    const skillTittle: string = "Stack"
    const skillLists: SkillList[] = [
        {
            tittle: "Lenguajes",
            skills: [
                { icon: "JAVA", text: "Java" },
                { icon: "PYTHON", text: "Python" },
                { icon: "TYPESCRIPT", text: "TypeScript" },
                { icon: "BASH", text: "Bash" }
            ]
        },
        {
            tittle: "Bases de datos / ORM",
            skills: [
                { icon: "JAVA", text: "JPA" },
                { icon: "POSTGRESQL", text: "Postgresql" },
                { icon: "SQLSERVER", text: "SQLServer" },
                { icon: "SEQUELIZE", text: "Sequelize" }
            ]
        },
        {
            tittle: "Frameworks / Librerías",
            skills: [
                { icon: "REACT", text: "React" },
                { icon: "SPRING", text: "Spring" }
            ]
        },
        {
            tittle: "Infraestructura",
            skills: [
                { icon: "LINUX", text: "Linux" },
                { icon: "DEBIAN", text: "Debian" },
                { icon: "NODE", text: "Node" },
                { icon: "DOCKER", text: "Docker" }
            ]
        }
    ];

    const proyectTittle: string = "Mis proyectos";

    const navigateFortune = () => {
        navigate("/proyects/fortune")
    }

    const navigateContenedores = () => {
        navigate("/proyects/contenedores")
    }

    const proyectItems: ProyectItem[] = [
        {
            tittle: "Fortune",
            description: "Una red social que ayuda a los músicos a conectar con sus futuros empleadores y expandir su influencia con la gran comunidad de músicos.",
            icon: "FORTUNE",
            goTo: navigateFortune
        },
        {
            tittle: "Contenedores-API",
            description: "Un proyecto que gestiona pedidos de traslado de contenedores para la construcción de casas.",
            icon: "CONTAINER",
            goTo: navigateContenedores
        }
    ];

    const timeLineTittle: string = "Mi formación"

    const timeItems: TimeItem[] = [
        {
            tittle: "Técnico Electrónico",
            description: "Instituto Privado Parroquial San Roque",
            date: "2015 - 2022"
        },
        {
            tittle: "Ingeniería en Sistemas",
            description: "UTN - Facultad Regional Córdoba",
            date: "2023 - Actualidad"
        }
    ]

    return {
        iconHeader,
        headerLinks,
        nameTitle,
        functionTittle,
        linkedIconItems,
        iconItems,
        skillTittle,
        skillLists,
        proyectItems,
        proyectTittle,
        timeLineTittle,
        timeItems
    }

}
