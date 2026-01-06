import style from "./style.module.css"
import ImageFrame from "../../atoms/image-frame/image-frame";

type Props = {
    image: string;
    onExit: () => void;
}

export default function ImageModal({
    image,
    onExit
}: Props) {
    return (
        <div className={style.mainContainer} onClick={onExit}>
            <div onClick={(e) => e.stopPropagation()}>
                <ImageFrame
                    image={image}
                    className={style.imageFrame}
                />
            </div>
        </div>
    )
}
