import { useNavigate } from "react-router-dom";
import { type LinkItem } from "../../../domain";
import { useImageModal } from "../../hooks/useImageModal";

export function ViewModel() {

    const { isImageOpen, imageModal, onClickImage, onClickModal } = useImageModal();

    const navigate = useNavigate();

    const onCLickHeader = () => {
        navigate("/");
    }

    const iconHeader: string = "terminal";
    const headerLinks: LinkItem[] = []

    const mainTittle: string = "Fortune";

    const generalTittle: string = "Sobre el proyecto";
    const generalDescription: string = "Fortune es una red social diseñada como punto de encuentro para la industria musical. Permite a los artistas mostrar su trabajo, conectar con su audiencia y gestionar eventos. A su vez, facilita a contratistas y organizadores el contacto directo con talentos para exposiciones y servicios profesionales.";

    const rangeTittle: string = "Alcance funcional";
    const rangeDescription: string = "Si bien el alcance social es amplio, técnicamente la aplicación se centra en:";
    const rangeItems: string[] = [
        "Sistema de mensajería en tiempo real (Chat).",
        "Gestión de perfiles diferenciados (Usuarios y Páginas/Artistas).",
        "Creación de posts y eventos con algoritmos de feed personalizados.",
        "Sistema de notificaciones reactivas.",
        "Funcionalidad de 'Seguir' (Followers/Following).",
        "Panel administrativo interno para la gestión de usuarios por parte del staff."
    ];

    const archTittle: string = "Arquitectura utilizada";
    const archDescription: string = "La arquitectura garantiza una experiencia fluida, escalable y segura:\n\nBackend: Arquitectura de Microservicios, donde cada servicio aplica el patrón Layered (Datos, Dominio, Presentación) y posee su propia base de datos (Database per Service). Se implementó una librería compartida (Core) para centralizar Entidades y DTOs comunes. El modelo de persistencia separa estrictamente los modelos de base de datos de las entidades de dominio.\n\nFrontend: Clean Architecture con capas de Core, Domain, Infrastructure y UI. La interfaz utiliza Atomic Design (Atomos, Moléculas, Organismos) para una máxima reutilización de componentes.";
    const archImg: string = "F_ARCHFORTUNE";

    const orgTittle: string = "El equipo";
    const orgDescription: string = "El desarrollo fue llevado a cabo por un equipo de colegas universitarios. Nos organizamos bajo metodologías ágiles (Scrum), gestionando el ciclo de vida del desarrollo a través de sprints y utilizando Jira para el seguimiento de tareas.";

    const expTittle: string = "Mi rol y experiencia";
    const expDescription: string = "Me desempeñé principalmente como Backend Developer, con integraciones puntuales en el Frontend. Mis responsabilidades clave incluyeron:\n\n";
    const expItems: string[] = [
        "Seguridad: Diseño e implementación de Autenticación y Autorización (AuthN/AuthZ).",
        "Lógica de Negocio: Desarrollo de algoritmos para el feed de noticias y búsqueda de contenido.",
        "Automatización: Implementación de tareas programadas (Cron Jobs) en Java para la gestión automática del ciclo de vida de los eventos.",
        "Rendimiento: Optimización mediante paginación de datos (Infinite Scroll).",
        "Tiempo Real: Implementación de WebSockets para el sistema de chat.",
        "Notificaciones: Integración de Java Mail Sender con plantillas HTML para recuperación de contraseñas y bienvenida.",
        "Infraestructura: Dockerización de servicios, configuración de VPS y despliegue continuo.",
        "QA: Desarrollo de colecciones de Postman para pruebas exhaustivas de la API."
    ];

    const techTittle: string = "Tecnologias";
    const techIcons: string[] = [
        "JAVA",
        "SPRING",
        "SOCKET",
        "POSTGRESQL",
        "DOCKER",
        "DEBIAN",
        "HTTP",
        "TYPESCRIPT",
        "REACT",
        "POSTMAN"
    ]

    const linkTittle: string = "Referencias";
    const links: LinkItem[] = [
        { text: "Repositorio del Cliente", link: "git_fortune_cli" },
        { text: "Repositorio del Servidor", link: "git_fortune_sv" },
        { text: "Plataforma", link: "main_fortune" },
    ]

    const demoTittle: string = "Presentacion";
    const demos: string[] = [
        "F_CHAT",
        "F_EVENTOS",
        "F_NOTIS",
        "F_CAL",
        "F_PERFIL",
        "F_BUSQUEDA",
        "F_FEED",
    ]

    return {
        iconHeader,
        headerLinks,
        onCLickHeader,
        mainTittle,
        generalTittle,
        generalDescription,
        rangeTittle,
        rangeDescription,
        rangeItems,
        archTittle,
        archDescription,
        archImg,
        orgTittle,
        orgDescription,
        expTittle,
        expDescription,
        expItems,
        techTittle,
        techIcons,
        linkTittle,
        links,
        demoTittle,
        demos,
        onClickImage,
        onClickModal,
        isImageOpen,
        imageModal
    }

}
