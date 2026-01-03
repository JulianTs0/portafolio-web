import style from "./style.module.css"
import DetailText from "../../atoms/detail-text/detail-text";
import MediumTittle from "../../atoms/medium-tittle/medium-tittle";
import ImageFrame from "../../atoms/image-frame/image-frame";

type Props = {
    tittleText: string;
    detailText: string;
    image: string;
}

export default function ImageExpo({
    tittleText,
    detailText,
    image
}: Props) {
    return (
        <div className={style.mainContainer}>
            <MediumTittle text={tittleText} />
            <DetailText text={detailText} />
            <ImageFrame image={image} className={style.imageFrame}/>
        </div>
    )
}
