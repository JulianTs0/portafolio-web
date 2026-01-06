import DetailText from "../../atoms/detail-text/detail-text";
import style from "./style.module.css";

type Props = {
    list: string[];
};

export default function TextList({
    list
}: Props) {
    return (
        <div className={style.container}>
            {list.map((item, index) => (
                <DetailText key={index} text={item} className={style.item} />
            ))}
        </div>
    );
}
