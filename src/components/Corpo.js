import styled from "styled-components";
import seta_play from "../assets/seta_play.png";
import icone_certo from "../assets/icone_certo.png";
import icone_quase from "../assets/icone_quase.png";
import icone_erro from "../assets/icone_erro.png";
import ContainerFlashCardRespostas from "./ContainerFlashCardRespostas";
import ContainerFlashCardPerguntas from "./ContainerFlashCardPerguntas";
import {CARDS} from "./Deck";
import ContainerFlashCards from "./ContainerFlashCard";

export default function Corpo (){
    return (
        <ContainerCorpo>
            <ContainerFlashCards />
        </ContainerCorpo>
    )
}

const ContainerCorpo = styled.div `
margin-bottom: 100px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
   
`


//primeiro, cada card vai chamar 1 pergunta, as perguntas estarao dentro de um []
// segundo, cada pergunta vai chamar uma resposta
//dentro de cada resposta, tera as opçoes de acerto
//cada opçao de acerto chamara um status final de card (certo, quase ou errado)
//cada status atualiza o contador de finalizados

