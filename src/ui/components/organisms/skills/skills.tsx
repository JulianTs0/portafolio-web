import LargeTittle from "../../atoms/large-tittle/large-tittle";
import MediumTittle from "../../atoms/medium-tittle/medium-tittle";
import SkillCard from "../../molecules/skill-card/skill-card";
import { type SkillList } from "../../../../domain/"
import style from "./style.module.css"

type Props = {
    mainTittle: string;
    skillLists: SkillList[];
}

export default function Skills({
    mainTittle,
    skillLists
}: Props) {    
    return (
        <div className={style.mainContainer} id="skills">
            <LargeTittle text={mainTittle} />
            { skillLists.map( (lists,indexList) => (
                <div key={indexList}>
                    <MediumTittle text={lists.tittle}/>
                    <div className={style.skillContainer}>
                        { lists.skills.map( (skill, indexItem) => (
                            <div key={indexItem}>
                                <SkillCard icon={skill.icon} text={skill.text}/>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
