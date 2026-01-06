import style from "./style.module.css"
import { ImagessMapper } from "../../../../core"

type Props = {
    image: string;
    className?: string;
    onClick?: () => void
}

export default function ImageFrame({
    image,
    className = "",
    onClick
}: Props) {
    return (
        <div className={`${style.container} ${className} ${onClick ? style.clickable : ''}`} onClick={onClick}>
            <img className={style.image} src={ImagessMapper.getImage(image)} alt="Image" />
        </div>  
    )
}
