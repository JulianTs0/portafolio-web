import ApiIcon from "../../ui/assets/icons/api.svg";
import BashIcon from "../../ui/assets/icons/bash.svg";
import BlueprintIcon from "../../ui/assets/icons/blueprint.svg";
import BuildingIcon from "../../ui/assets/icons/building.svg";
import ClusterIcon from "../../ui/assets/icons/cluster.svg";
import DataclusterIcon from "../../ui/assets/icons/datacluster.svg";
import DebianIcon from "../../ui/assets/icons/debian.svg";
import DefaultIcon from "../../ui/assets/icons/default.svg";
import DiagramIcon from "../../ui/assets/icons/diagram.svg";
import DockerIcon from "../../ui/assets/icons/docker.svg";
import GithubIcon from "../../ui/assets/icons/github.svg";
import HttpIcon from "../../ui/assets/icons/http.svg";
import JavaIcon from "../../ui/assets/icons/java.svg";
import LinkedinIcon from "../../ui/assets/icons/linkedin.svg";
import LinuxIcon from "../../ui/assets/icons/linux.svg";
import MailIcon from "../../ui/assets/icons/mail.svg";
import NodeIcon from "../../ui/assets/icons/node.svg";
import PinIcon from "../../ui/assets/icons/pin.svg";
import PostgresqlIcon from "../../ui/assets/icons/postgresql.svg";
import PythonIcon from "../../ui/assets/icons/python.svg";
import ReactIcon from "../../ui/assets/icons/react.svg";
import SchoolIcon from "../../ui/assets/icons/school.svg";
import SequelizeIcon from "../../ui/assets/icons/sequelize.svg";
import SpringIcon from "../../ui/assets/icons/spring.svg";
import SqlserverIcon from "../../ui/assets/icons/sqlserver.svg";
import TerminalIcon from "../../ui/assets/icons/terminal.svg";
import TypescriptIcon from "../../ui/assets/icons/typescript.svg";
import UmlIcon from "../../ui/assets/icons/uml.svg";

export class IconMapper {

    private static readonly ICONS: Record<string, string> = {
        "API": ApiIcon,
        "BASH": BashIcon,
        "BLUEPRINT": BlueprintIcon,
        "BUILDING": BuildingIcon,
        "CLUSTER": ClusterIcon,
        "DATACLUSTER": DataclusterIcon,
        "DEBIAN": DebianIcon,
        "DIAGRAM": DiagramIcon,
        "DOCKER": DockerIcon,
        "GITHUB": GithubIcon,
        "HTTP": HttpIcon,
        "JAVA": JavaIcon,
        "LINKEDIN": LinkedinIcon,
        "LINUX": LinuxIcon,
        "MAIL": MailIcon,
        "NODE": NodeIcon,
        "PIN": PinIcon,
        "POSTGRESQL": PostgresqlIcon,
        "PYTHON": PythonIcon,
        "REACT": ReactIcon,
        "SCHOOL": SchoolIcon,
        "SEQUELIZE": SequelizeIcon,
        "SPRING": SpringIcon,
        "SQLSERVER": SqlserverIcon,
        "TERMINAL": TerminalIcon,
        "TYPESCRIPT": TypescriptIcon,
        "UML": UmlIcon,
    }

    public static getIcon(type?: string): string {
        if (!type) return DefaultIcon;
        const key = type.toUpperCase().trim();
        return this.ICONS[key] || DefaultIcon;
    }

}
