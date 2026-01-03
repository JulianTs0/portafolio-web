import style from "./style.module.css"
import { IconMapper } from "../../../../core"

type Props = {
    icon: string;
    isBig?: boolean;
    onClick?: () => void;
    className?: string
}

export default function Icon({
    icon,
    isBig = false,
    className = "",
    onClick
}: Props) {
    return (
        <div 
            className={`
                ${style.container} 
                ${isBig ? style.bigContainer : ""} 
                ${onClick ? style.clickeable : "" }
                ${className}
                `} 
            onClick={ () => { onClick?.() } }>
            <img className={`${ isBig ? style.bigIcon : style.icon}`} src={IconMapper.getIcon(icon)} alt="Icon" />
        </div>  
    )
}
