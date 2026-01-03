import { useNavigate } from "react-router-dom";
import { type LinkItem } from "../../../domain";

export function ViewModel() {
    
    const navigate = useNavigate();

    const onCLickHeader = () => {
        navigate("/");
    }

    const iconHeader: string = "terminal";
    const headerLinks: LinkItem[] = []

    const mainTittle: string = "Fortune";

    const generalTittle: string = "Titulo";
    const generalDescription: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud";

    const rangeTittle: string = "Titulo";
    const rangeDescription: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud";

    const archTittle: string = "Titulo";
    const archDescription: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud";
    const archImg: string = "fortuneArch"

    const orgTittle: string = "Titulo";
    const orgDescription: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud";

    const expTittle: string = "Titulo";
    const expDescription: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud";

    const techTittle: string = "Titulo";
    const techIcons: string[] = [
        "default",
        "default",
        "default",
    ]

    const linkTittle: string = "Titulo";
    const links: LinkItem[] = [
        { text: "text", link: "link" },
        { text: "text", link: "link" },
        { text: "text", link: "link" },
    ]

    const demoTittle: string = "Titulo";
    const demos: string[] = [
        "demo1",
        "demo2"
    ]

    return {
        iconHeader,
        headerLinks,
        onCLickHeader,
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
    }

}
