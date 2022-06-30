import { ITarefa } from "../../types/tarefa";
import Item from "./item";
import style from "./lista.module.scss"

function Lista({tarefas}: {tarefas: ITarefa[]}){

    return(
        <aside className={style.listaTarefas}>
            <h2>Tarefas do dia</h2>
            <ul>
                {tarefas.map((item,index) => (
                    <Item
                        key={index}
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;