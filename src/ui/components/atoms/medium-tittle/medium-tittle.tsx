import style from "./style.module.css";

type Props = {
    text: string;
}

export default function MediumTittle({
    text
}: Props) {
    return <h3 className={style.tittle}>{text}</h3>
}
