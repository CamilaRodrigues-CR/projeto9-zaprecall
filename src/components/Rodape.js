import styled from "styled-components"


export default function Rodape (){
    return (    
    <ContainerRodape>
        <h1>0/4 Concluídos </h1>
    </ContainerRodape>
    )
}

const ContainerRodape = styled.div `
width: 100%;
height: 70px;
background-color: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
bottom: 0;
left: 0;

    h1 {
        color: #333333;
        width: 145px;
        height: 22px;
        font-weight: 400;
        font-size: 18px;
        font-family: 'Recursive', sans-serif;
    }
`