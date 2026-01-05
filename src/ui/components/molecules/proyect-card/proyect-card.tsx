import style from "./style.module.css"
import Icon from "../../atoms/icon/icon"
import DetailText from "../../atoms/detail-text/detail-text";
import MediumTittle from "../../atoms/medium-tittle/medium-tittle";

type Props = {
    icon: string;
    tittleText: string;
    detailText: string;
    onCLick: () => void;
}

export default function ProyectCard({
    icon,
    tittleText,
    detailText,
    onCLick
}: Props) {
    return (
        <div className={style.mainContainer} onClick={onCLick}>
            <Icon icon={icon} className={style.icon}/>
            <div className={style.textContainer}>
                <MediumTittle text={tittleText} />
                <DetailText text={detailText} />
            </div>
        </div>
    )
}
