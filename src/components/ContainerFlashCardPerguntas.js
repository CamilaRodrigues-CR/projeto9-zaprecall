import styled from "styled-components";
import seta_virar from "../assets/seta_virar.png";
import CARDS from "./Deck";

export default function ContainerFlashCardPerguntas(){
    
    return (
        <Pergunta />
   )
}

function Pergunta() {
    const [
        {question: pergunta1, answer: resposta1}, {question: pergunta2, answer: resposta2},
        {question: pergunta3, answer: resposta3}, {question: pergunta4, answer: resposta4},
        {question: pergunta5, answer: resposta5}, {question: pergunta6, answer: resposta6},
        {question: pergunta7, answer: resposta7}, {question: pergunta8, answer: resposta8}]= CARDS

    return (
        <ul>
            {CARDS.map( (p) => (
                <ContainerFlashCardPergunta>
                    <h1>{p.question}</h1>
                    <img src={seta_virar}></img>
                </ContainerFlashCardPergunta>
            ))}
        </ul>      
    )

}


//-------------------------------------Estilização-----------------------------------------------------

const ContainerFlashCardPergunta = styled.div `
width: 299px;
height: 131px;
border-radius: 5px;
background-color: #FFFFD4;
margin-bottom: 25px;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

display: flex;
justify-content: space-between;
align-items: center;
position: relative;
    h1 {
            width: 250px;
            height: 100px;
            margin-left: 15px;
            font-size: 18px;
            font-weight: 400;
            font-family: 'Recursive', sans-serif;
    }
    img {
        width:30px;
        height: 20px;
        color: #333333;
        margin: 15px;
        position: absolute;
        right: 5px;
        bottom: 6px;
    }
`