import styled from "styled-components";
import seta_play from "../assets/seta_play.png";
import ContainerFlashCardPerguntas from "./ContainerFlashCardPerguntas";
import CARDS from "./Deck";
import seta_virar from "../assets/seta_virar.png";


export default function ContainerFlashCards (){
    return (
        <Card />
    )
}

function Card() {
    const CARD =[
        ("pergunta 1"), ("pergunta 2"), ("pergunta 3"), ("pergunta 4"),
        ("pergunta 5"), ("pergunta 6"), ("pergunta 7"), ("pergunta 8")]

    return (
        <ul>
            {CARD.map( (c) => (
                <ContainerFlashCard >
                    <h1>{c}</h1>
                    <img onClick={() => <ContainerFlashCardPerguntas />} src={seta_play}></img>
                                      
                </ContainerFlashCard>
            ))}
        </ul>      
    )

}


    function Pergunta() {
        const [
            {question: question1}, {question: question2},
            {question: question3}, {question: question4},
            {question: question5}, {question: question6},
            {question: question7}, {question: question8}]= CARDS
    
        
    }




//-----------------------------------------------Estilização--------------------------------------------------
const ContainerFlashCard = styled.div `
width: 300px;
height: 65px;
border-radius: 5px;
background-color: #FFFFFF;
margin-top: 25px;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

display: flex;
justify-content: space-between;
align-items: center;
    h1 {
            width: 87px;
            height: 19px;
            margin-left: 15px;
            font-size: 16px;
            font-weight: 700;
            font-family: 'Recursive', sans-serif;
    }
    img {
        width:20px;
        height: 23px;
        color: #333333;
        margin: 15px;
    }
`