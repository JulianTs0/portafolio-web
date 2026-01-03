import LargeTittle from "../../atoms/large-tittle/large-tittle";
import { type ProyectItem } from "../../../../domain/"
import style from "./style.module.css"
import ProyectCard from "../../molecules/proyect-card/proyect-card";

type Props = {
    mainTittle: string;
    proyects: ProyectItem[];
}

export default function Proyects({
    mainTittle,
    proyects
}: Props) {    
    return (
        <div className={style.mainContainer} id="proyects">
            <LargeTittle text={mainTittle} />
            <div className={style.itemContainer}>
                { proyects.map( (item,index) => (
                    <div key={index}>
                        <ProyectCard tittleText={item.tittle} icon={item.icon} detailText={item.description} onCLick={item.goTo} />
                    </div>
                ))}
            </div>   
        </div>
    );
}
