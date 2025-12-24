import style from "./style.module.css"

type Props = {
    text: string;
}

export default function LargeTittle({
    text
}: Props) {
    return <h2 className={style.tittle}>{text}</h2>
}
