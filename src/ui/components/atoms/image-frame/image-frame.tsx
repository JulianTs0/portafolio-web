import style from "./style.module.css"
import { ImagessMapper } from "../../../../core"

type Props = {
    image: string;
    className?: string;
}

export default function ImageFrame({
    image,
    className = ""
}: Props) {
    return (
        <div className={`${style.container} ${className}`}>
            <img className={style.image} src={ImagessMapper.getImage(image)} alt="Image" />
        </div>  
    )
}
