import style from "./style.module.css"
import { type LinkItem } from "../../../../domain";
import LinkText from "../link-text/link-text";
import MediumTittle from "../../atoms/medium-tittle/medium-tittle";

type Props = {
    tittle: string;
    links: LinkItem[];
}

export default function SimpleLinkList({
    tittle,
    links
}: Props) {
    return (
        <div className={style.mainContainer}>
            <MediumTittle text={tittle} />
            <div className={style.container}>
                { links.map( (item,index) => (
                    <div key={index}>
                        <LinkText text={item.text} link={item.link} /> 
                    </div>
                ))}
            </div>
        </div>
    )
}
