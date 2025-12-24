import "../../styles/index.css"
import About from "../../components/organisms/about/about";
import Skills from "../../components/organisms/skills/skills";
import Proyects from "../../components/organisms/proyects/proyects";
import Layout from "../../layout/layout";
import Education from "../../components/organisms/education/education";
import Header from "../../components/molecules/header/header";

import { ViewModel } from "./viewmodel"

export default function HomeRoute() {

    const {
        iconHeader,
        headerLinks,
        nameTitle,
        functionTittle,
        linkedIconItems,
        iconItems,
        skillTittle,
        skillLists,
        proyectItems,
        proyectTittle,
        timeLineTittle,
        timeItems
    } = ViewModel();

    return (
        <Layout>
            <Header icon={iconHeader} links={headerLinks} />
            <main className={`delimiter`}>
                <About mainTittle={nameTitle} subTittle={functionTittle} linkedIcons={linkedIconItems} unlinkedIcons={iconItems} />
                <Skills mainTittle={skillTittle} skillLists={skillLists} />
                <Proyects mainTittle={proyectTittle} proyects={proyectItems} />
                <Education mainTittle={timeLineTittle} educationList={timeItems} />
            </main>
        </Layout>
    )
}
