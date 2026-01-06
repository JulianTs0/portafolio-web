import DefaultIcon from "../../ui/assets/icons/default.svg";
import RegistrarSolicitud from "../../ui/assets/images/registrarSolicitud.svg";
import RegistrarInicioTramo from "../../ui/assets/images/registrarInicioTramo.svg";
import RegistrarFinTramo from "../../ui/assets/images/registrarFinTramo.svg";
import GetRutaTentativa from "../../ui/assets/images/getRutaTentativa.svg";
import AsignarTransportista from "../../ui/assets/images/asignarTransportista.svg";
import AsignarCamion from "../../ui/assets/images/asignarCamion.svg";
import ContainerImage from "../../ui/assets/images/archContainer.svg";
import ChatIcon from "../../ui/assets/images/chat.png";
import EventosIcon from "../../ui/assets/images/eventos.png";
import NotisIcon from "../../ui/assets/images/notis.png";
import CalendarioIcon from "../../ui/assets/images/calendario.png";
import PerfilIcon from "../../ui/assets/images/perfil.png";
import BusquedaIcon from "../../ui/assets/images/busqueda.png";
import FeedIcon from "../../ui/assets/images/feed.png";

export class ImagessMapper {

    private static readonly IMAGES: Record<string, string> = {
        "C_REGSOL": RegistrarSolicitud,
        "C_REGINICIO": RegistrarInicioTramo,
        "C_REGFIN": RegistrarFinTramo,
        "C_RUTATENT": GetRutaTentativa,
        "C_ASIGNTRANS": AsignarTransportista,
        "C_ASIGNCAM": AsignarCamion,
        "C_ARCHCONTAINER": ContainerImage,
        "F_CHAT": ChatIcon,
        "F_EVENTOS": EventosIcon,
        "F_NOTIS": NotisIcon,
        "F_CAL": CalendarioIcon,
        "F_PERFIL": PerfilIcon,
        "F_BUSQUEDA": BusquedaIcon,
        "F_FEED": FeedIcon,
    }

    public static getImage(type?: string): string {
        if (!type) return DefaultIcon;
        const key = type.toUpperCase().trim();
        return this.IMAGES[key] || DefaultIcon;
    }

}
