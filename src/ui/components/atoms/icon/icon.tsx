import style from "./style.module.css"
import { IconMapper } from "../../../../core"

type Props = {
    icon: string;
    isBig?: boolean;
}

export default function Icon({
    icon,
    isBig = false
}: Props) {
    return (
        <div className={`${style.container} ${isBig ? style.bigContainer : ""}`}>
            <img className={`${ isBig ? style.bigIcon : style.icon}`} src={IconMapper.getIcon(icon)} alt="Icon" />
        </div>  
    )
}
