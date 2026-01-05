import style from "./style.module.css"
import Icon from "../../atoms/icon/icon"
import DetailText from "../../atoms/detail-text/detail-text"
import { LinkMapper } from "../../../../core";

type Props = {
    icon: string;
    text: string;
    link: string;
}

export default function IconLink({
    icon,
    text,
    link
}: Props) {
    return (
        <a 
            href={LinkMapper.getLink(link)}
            target="_blank"
            rel="noopener noreferrer"
            className={style.container}
        >
            <Icon icon={icon}/>
            <DetailText text={text} />
        </a>  
    )
}
