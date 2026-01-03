import { useScrollToTop } from "../hooks/useScrollToTop";
import "../styles/index.css"

type Props = {
    children: React.ReactNode;
}

export default function Layout({
    children
}: Props) {

    useScrollToTop();

    return (
        <div className={`container`}>
            {children}
        </div>
    );
}
