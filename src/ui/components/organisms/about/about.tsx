import LargeTittle from "../../atoms/large-tittle/large-tittle";
import MediumTittle from "../../atoms/medium-tittle/medium-tittle";
import IconDetail from "../../molecules/icon-detail/icon-detail";
import IconLink from "../../molecules/icon-link/icon-link";
import { type LinkedIconItem, type IconItem } from "../../../../domain/"
import style from "./style.module.css"

type Props = {
    mainTittle: string;
    subTittle: string;
    linkedIcons: LinkedIconItem[];
    unlinkedIcons: IconItem[];
}

export default function About({
    mainTittle,
    subTittle,
    linkedIcons,
    unlinkedIcons
}: Props) {    
    return (
        <div className={style.mainContainer} id="about">
            <LargeTittle text={mainTittle} />
            <MediumTittle text={subTittle}/>
            <div className={style.itemContainer}>
                { linkedIcons.map( (item,index) => (
                    <div key={index}>
                        <IconLink text={item.text} icon={item.icon} link={item.link}/> 
                    </div>
                ))}
                { unlinkedIcons.map( (item,index) => (
                    <div key={index}>
                        <IconDetail text={item.text} icon={item.icon} /> 
                    </div>
                ))}
            </div>   
        </div>
    );
}
