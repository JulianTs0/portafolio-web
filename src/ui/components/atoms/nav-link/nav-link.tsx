import style from "./style.module.css"

type Props = {
    text: string;
    link: string;
}

export default function NavLink({
    text,
    link
}: Props) {
    return (
        <a
            href={`#${link}`}
            className={`${style.navLink} animated-link`}
        >
            <span className={style.text}>{text}</span>
        </a>
    )
}
