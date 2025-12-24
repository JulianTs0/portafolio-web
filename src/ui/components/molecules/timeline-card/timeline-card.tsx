import DetailText from "../../atoms/detail-text/detail-text"
import MediumTittle from "../../atoms/medium-tittle/medium-tittle"
import style from "./style.module.css"

type Props = {
    tittle: string;
    description: string;
    date: string;
}

export default function TimelineCard({
    tittle,
    description,
    date
}: Props) {
    return (
        <div className={style.mainContainer}>
            <div className={style.timelineItem}>
                <div className={style.nodeCircle}></div>
                <div className={style.nodeLine}></div>
            </div>
            <div className={style.textContainer}>
                <MediumTittle text={tittle} />
                <DetailText text={description} className={style.grow} />
                <DetailText text={date} />
            </div>
        </div>
    )
}
