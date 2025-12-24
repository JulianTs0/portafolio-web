import style from "./style.module.css"
import Icon from "../../atoms/icon/icon"
import LinkText from "../link-text/link-text"

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
        <div className={style.container}>
            <Icon icon={icon}/>
            <LinkText text={text} link={link} />
        </div>  
    )
}
