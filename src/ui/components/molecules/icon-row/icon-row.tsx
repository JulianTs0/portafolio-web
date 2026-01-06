import style from "./style.module.css"
import Icon from "../../atoms/icon/icon"
import MediumTittle from "../../atoms/medium-tittle/medium-tittle"

type Props = {
    tittle: string;
    icons: string[];
}

export default function IconRow({
    tittle,
    icons
}: Props) {
    return (
        <div className={style.mainContainer}>
            <MediumTittle text={tittle} />
            <div className={style.container}>
                {icons.map( (item, index) => (
                    <Icon icon={item} key={index} className={style.icon}/>
                ))}
            </div>
        </div>  
    )
}
