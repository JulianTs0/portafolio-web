import style from "./style.module.css"
import Icon from "../../atoms/icon/icon"
import DetailText from "../../atoms/detail-text/detail-text";
import MediumTittle from "../../atoms/medium-tittle/medium-tittle";

type Props = {
    icon: string;
    tittleText: string;
    detailText: string;
}

export default function ProyectCard({
    icon,
    tittleText,
    detailText
}: Props) {
    return (
        <div className={style.mainContainer}>
            <Icon icon={icon} />
            <div className={style.textContainer}>
                <MediumTittle text={tittleText} />
                <DetailText text={detailText} />
            </div>
        </div>
    )
}
