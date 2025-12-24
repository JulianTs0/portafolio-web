import style from "./style.module.css"
import Icon from "../../atoms/icon/icon"
import DetailText from "../../atoms/detail-text/detail-text";

type Props = {
    icon: string;
    text: string;
}

export default function SkillCard({
    icon,
    text,
}: Props) {
    return (
        <div className={style.container}>
            <Icon icon={icon}/>
            <DetailText text={text} />
        </div>  
    )
}
