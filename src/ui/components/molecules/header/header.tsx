import style from "./style.module.css"
import Icon from "../../atoms/icon/icon"
import NavLink from "../../atoms/nav-link/nav-link";
import { type LinkItem } from "../../../../domain";

type Props = {
    icon: string;
    links: LinkItem[]
}

export default function Header({
    icon,
    links
}: Props) {
    return (
        <header className={style.header}>
            <Icon icon={icon}/>
            { links.map((item,index) => (
                <div key={index}>
                    <NavLink text={item.text} link={item.link} />
                </div>  
            ))}
        </header>  
    )
}
