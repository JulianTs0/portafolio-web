import { useNavigate } from "react-router-dom";
import { type LinkItem } from "../../../domain";

export function ViewModel() {

    const navigate = useNavigate();

    const onCLickHeader = () => {
        navigate("/");
    }

    const iconHeader: string = "terminal";
    const headerLinks: LinkItem[] = []

    const mainTittle: string = "Contenedores-API";

    const generalTittle: string = "Sobre el proyecto";
    const generalDescription: string = "Proyecto Backend enfocado en la logística y transporte de contenedores habitacionales. La API gestiona el ciclo de vida completo de las solicitudes, desde la petición inicial del cliente hasta la entrega física en destino.\n\nEl sistema administra rutas logísticas divididas en tramos, asignación de camiones y permite a los clientes realizar un seguimiento (tracking) en tiempo real del estado de su pedido.";

    const rangeTittle: string = "Alcance funcional y técnico";
    const rangeDescription: string = "El sistema integra múltiples módulos técnicos y funcionales:\n\n• Seguridad: Implementación de autorización OAuth2.0 utilizando Keycloak como Identity Provider.\n• Geolocalización: Integración con la API de OSRM para calcular distancias reales, tiempos estimados y tarifas dinámicas basadas en kilómetros.\n• Algoritmos: Lógica compleja para la generación automática de tramos de ruta y cálculo de costos (estimados vs. finales).\n• Roles de Usuario:\n  - Admin: Gestión total de recursos (contenedores, depósitos, flota).\n  - Transportista: Actualización de estados de tramos y disponibilidad.\n  - Cliente: Trazabilidad completa de la solicitud (Borrador, En Tránsito, Entregada).";

    const archTittle: string = "Arquitectura utilizada";
    const archDescription: string = "Se diseñó una Arquitectura de Microservicios, aplicando el patrón 'Database per Service' (una BDD por microservicio) para garantizar desacoplamiento.\n\nEl despliegue se realiza mediante contenedores independientes. La seguridad se maneja a nivel perimetral (Edge Security), donde el API Gateway valida las credenciales, permitiendo una comunicación interna fluida entre servicios.";
    const archImg: string = "fortuneArch"

    const orgTittle: string = "El equipo";
    const orgDescription: string = "Aunque el proyecto inició en un entorno grupal académico, asumí la responsabilidad integral del desarrollo técnico y la arquitectura final, gestionando el ciclo de vida completo del software para asegurar su entrega.";

    const expTittle: string = "Mi rol y experiencia";
    const expDescription: string = "Como desarrollador líder del proyecto, abarqué todas las fases del ciclo de desarrollo (End-to-End):\n\n• Backend & Seguridad: Implementación de Spring Boot con seguridad OAuth2/Keycloak y comunicación entre microservicios mediante Feign Client (HTTP).\n• DevOps & Infra: Dockerización completa de la solución y orquestación con Docker Compose.\n• Observabilidad: Diseño e implementación del stack de monitoreo Loki + Promtail + Grafana para la gestión centralizada de logs.\n• Integraciones: Conexión con APIs de terceros (OSRM) y algoritmos de tarificación.\n• Calidad: Documentación técnica con Swagger y suites de pruebas automatizadas con Postman.";

    const techTittle: string = "Tecnologias";
    const techIcons: string[] = [
        "JAVA",
        "SPRING",
        "POSTGRESQL",
        "DOCKER",
        "HTTP",
        "POSTMAN",
        "OAUTH",
        "GRAFANA",
        "SWAGGER"
    ]

    const linkTittle: string = "Referencias";
    const links: LinkItem[] = [
        { text: "Repositorio", link: "link" },
        { text: "Plataforma", link: "link" },
    ]

    const demoTittle: string = "Presentacion";
    const demos: string[] = [
        "demo1",
        "demo2"
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
        archTittle,
        archDescription,
        archImg,
        orgTittle,
        orgDescription,
        expTittle,
        expDescription,
        techTittle,
        techIcons,
        linkTittle,
        links,
        demoTittle,
        demos
    }

}
