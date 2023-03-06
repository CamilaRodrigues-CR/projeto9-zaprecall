import styled from "styled-components";
import OpcoesRespostas from "./OpcoesRespostas";
import CARDS from "./Deck";

export default function ContainerFlashCardRespostas() {
    return (
        <Resposta />
    )
}

function Resposta() {
    const [
        {question: pergunta1, answer: resposta1}, {question: pergunta2, answer: resposta2},
        {question: pergunta3, answer: resposta3}, {question: pergunta4, answer: resposta4},
        {question: pergunta5, answer: resposta5}, {question: pergunta6, answer: resposta6},
        {question: pergunta7, answer: resposta7}, {question: pergunta8, answer: resposta8}]= CARDS

    return (
        <ul>
            {CARDS.map( (r) => (
                <ContainerFlashCardResposta>
                    <h1>{r.answer}</h1>
                    <OpcoesRespostas />
                </ContainerFlashCardResposta>
            ))}
        </ul>      
    )

}

//-------------------------------------------------Estilização------------------------------------------------


const ContainerFlashCardResposta = styled.div`
width: 299px;
height: 131px;
border-radius: 5px;
background-color: #FFFFD4;
margin-top: 25px;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
    h1 {
            width: 250px;
            height: 100px;
            margin-left: 15px;
            font-size: 18px;
            font-weight: 400;
            font-family: 'Recursive', sans-serif;
    }
    
`

