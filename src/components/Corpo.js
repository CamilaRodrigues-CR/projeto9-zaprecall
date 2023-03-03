import styled from "styled-components";
import seta_play from "../assets/seta_play.png";

export default function Corpo (){
    return (
        <ContainerCorpo>
            <ContainerFlashCard>
                <h1>Pergunta 1</h1>
                <img src={seta_play}></img>
            </ContainerFlashCard>
            <ContainerFlashCard>
                <h1>Pergunta 1</h1>
                <img src={seta_play}></img>
            </ContainerFlashCard>
            <ContainerFlashCard>
                <h1>Pergunta 1</h1>
                <img src={seta_play}></img>
            </ContainerFlashCard>
            <ContainerFlashCard>
                <h1>Pergunta 1</h1>
                <img src={seta_play}></img>
            </ContainerFlashCard>
            <ContainerFlashCard>
                <h1>Pergunta 1</h1>
                <img src={seta_play}></img>
            </ContainerFlashCard>
        </ContainerCorpo>
    )
}

const ContainerCorpo = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
   
`
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
