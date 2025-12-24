import LargeTittle from "../../atoms/large-tittle/large-tittle";
import { type TimeItem } from "../../../../domain/"
import style from "./style.module.css"
import TimelineCard from "../../molecules/timeline-card/timeline-card";

type Props = {
    mainTittle: string;
    educationList: TimeItem[];
}

export default function Education({
    mainTittle,
    educationList
}: Props) {    
    return (
        <div className={style.mainContainer} id="education">
            <LargeTittle text={mainTittle} />
            <div className={style.itemContainer}>
                { educationList.map( (item,index) => (
                    <div key={index}>
                        <TimelineCard tittle={item.tittle} description={item.description} date={item.date} />
                    </div>
                ))}
            </div>   
        </div>
    );
}
