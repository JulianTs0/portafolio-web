import ImageFrame from "../../atoms/image-frame/image-frame";
import MediumTittle from "../../atoms/medium-tittle/medium-tittle";
import style from "./style.module.css"

type Props = {
    tittle: string;
    images: string[];
    onClickImages?: (image: string) => void;
}

export default function SimpleImageList({
    images,
    tittle,
    onClickImages
}: Props) {
    return (
        <div className={style.mainContainer}>
            <MediumTittle text={tittle} />
            <div className={style.listContainer}>
                { images.map( (item,index) => (
                    <ImageFrame image={item} key={index} onClick={onClickImages ? () => onClickImages(item) : undefined}/> 
                ))}
            </div>
        </div>
    )
}
