import React from "react";
import style from "./lista.module.scss"

function Lista(){
    const tarefas = [{
        tarefa: 'cozinhar',
        tempo: '02:00:00'
    },{
        tarefa: 'malhar',
        tempo: '01:00:00'
    },{
        tarefa: 'lutar',
        tempo: '03:00:00'
    }]
    return(
        <aside className={style.listaTarefas}>
            <h2>Tarefas do dia</h2>
            <ul>
                {tarefas.map((item,index) => (
                    <li key={index} className={style.item}>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;