import style from "./style.module.css"

type Props = {
    text: string;
    className?: string;
}

export default function DetailText({
    text,
    className = ""
}: Props) {
    return <p className={`${style.text} ${className}`}>{text}</p>
}
