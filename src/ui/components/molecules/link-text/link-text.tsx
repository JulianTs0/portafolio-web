import style from "./style.module.css";
import { LinkMapper } from "../../../../core";
import DetailText from "../../atoms/detail-text/detail-text"

type Props = {
    text: string;
    link: string;
}

export default function LinkText({
    text,
    link
}: Props) {
    return (
        <a 
            href={LinkMapper.getLink(link)}
            target="_blank"
            rel="noopener noreferrer"
            className={`${style.link} animated-link`}
        >
            <DetailText text={text}/>
        </a>
    )
}
