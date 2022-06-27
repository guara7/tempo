import React from "react";
import Botao from "../botao";
import style from './formulario.module.scss';

class Formulario extends React.Component{
    render(): React.ReactNode {
        return(
            <form className={style.novaTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione uma nova tarefa
                </label>
                <input 
                    type="text" 
                    name="tarefa"
                    id="tarefa"
                    placeholder="O que você quer fazer"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input 
                    type="text" 
                    step="1"
                    name="tempo"
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Botao/>
        </form>
        )
    }
}

export default Formulario;