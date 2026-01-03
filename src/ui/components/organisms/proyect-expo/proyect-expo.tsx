import LargeTittle from "../../atoms/large-tittle/large-tittle";
import { type LinkItem } from "../../../../domain/"
import style from "./style.module.css"
import ParagraphBlock from "../../molecules/paragraph-block/paragraph-block";
import ImageExpo from "../../molecules/image-expo/image-expo";
import IconRow from "../../molecules/icon-row/icon-row";
import SimpleLinkList from "../../molecules/simple-link-list/simple-link-list";
import SimpleImageList from "../../molecules/simple-image-list/simple-image-list";

type Props = {
    mainTittle: string,
    generalTittle: string,
    generalDescription: string,
    rangeTittle: string,
    rangeDescription: string,
    archTittle: string,
    archDescription: string,
    archImg: string,
    orgTittle: string,
    orgDescription: string,
    expTittle: string,
    expDescription: string,
    techTittle: string,
    techIcons: string[],
    linkTittle: string,
    links: LinkItem[],
    demoTittle: string,
    demos: string[]
}

export default function ProyectExpo({
    mainTittle,
    generalTittle,
    generalDescription,
    rangeTittle,
    rangeDescription,
    archTittle,
    archDescription,
    archImg,
    orgTittle,
    orgDescription,
    expTittle,
    expDescription,
    techTittle,
    techIcons,
    linkTittle,
    links,
    demoTittle,
    demos
}: Props) {
    return (
        <div className={style.container} >
            <LargeTittle text={mainTittle} />
            <ParagraphBlock tittleText={generalTittle} detailText={generalDescription} />
            <ParagraphBlock tittleText={rangeTittle} detailText={rangeDescription} />
            <ImageExpo tittleText={archTittle} detailText={archDescription} image={archImg} />
            <ParagraphBlock tittleText={orgTittle} detailText={orgDescription} />
            <ParagraphBlock tittleText={expTittle} detailText={expDescription} />
            <IconRow tittle={techTittle} icons={techIcons} />
            <SimpleLinkList tittle={linkTittle} links={links} />
            <SimpleImageList tittle={demoTittle} images={demos} />
        </div>
    );
}
