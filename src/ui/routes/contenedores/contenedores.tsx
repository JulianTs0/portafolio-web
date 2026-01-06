import "../../styles/index.css"
import Header from "../../components/molecules/header/header";
import { ViewModel } from "./viewmodel"
import Layout from "../../layout/layout";
import ProyectExpo from "../../components/organisms/proyect-expo/proyect-expo";

export default function ContainerRoute() {

    const {
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
        demos,
        isImageOpen,
        onClickImage,
        onClickModal,
        imageModal
    } = ViewModel();

    return (
        <Layout>
            <Header icon={iconHeader} links={headerLinks} onClick={onCLickHeader}/>
            <main className="delimiter">
                <ProyectExpo
                    mainTittle={mainTittle}
                    generalTittle={generalTittle}
                    generalDescription={generalDescription}
                    rangeTittle={rangeTittle}
                    rangeDescription={rangeDescription}
                    archTittle={archTittle}
                    archDescription={archDescription}
                    archImg={archImg}
                    orgTittle={orgTittle}
                    orgDescription={orgDescription}
                    expTittle={expTittle}
                    expDescription={expDescription}
                    techTittle={techTittle}
                    techIcons={techIcons}
                    linkTittle={linkTittle}
                    links={links}
                    demoTittle={demoTittle}
                    demos={demos}
                    isImageOpen={isImageOpen}
                    imageModal={imageModal}
                    onClickImage={onClickImage}
                    onCLickModal={onClickModal}
                />
            </main>
        </Layout>
    )
}
