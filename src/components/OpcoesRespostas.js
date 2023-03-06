import styled from "styled-components"

export default function OpcoesRespostas() {
    return (
        <OpcoesResposta>
            <NaoLembrei>
                <p>Não lembrei</p>
            </NaoLembrei>
            <QuaseNaoLembrei>
                <p>Quase não lembrei</p>
            </QuaseNaoLembrei>
            <Lembrei>
                <p>Zap!</p>
            </Lembrei>
        </OpcoesResposta>
    )
}

const OpcoesResposta = styled.div`
width: 290px;
height: 40px;
border-radius: 5px;
margin-bottom:10px;

display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;

`
const NaoLembrei = styled.div`
width: 85.17px;
height: 37.17px;
background-color: #FF3030;
border-radius: 5px;
display: flex;
justify-content: center;
    p{
        width:65.04px;
        height:37.17px;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
        font-family: 'Recursive', sans-serif;
        font-size: 12px;
        font-weight: 400;
    }
`
const QuaseNaoLembrei = styled.div`
width: 85.04px;
height: 37.17px;
border-radius: 5px;
background-color: #FF922E;
display: flex;
justify-content: center;
    p{
        width:65.04px;
        height:37.17px;
        text-align: center;
        color: #FFFFFF;
        font-family: 'Recursive', sans-serif;
        font-size: 12px;
        font-weight: 400;
    }
`
const Lembrei = styled.div`
width: 85.04px;
height: 37.17px;
border-radius: 5px;
background-color: #2FBE34;
display: flex;
justify-content: center;
    p{
        width:65.04px;
        height:37.17px;
        text-align: center;
        color: #FFFFFF;
        font-family: 'Recursive', sans-serif;
        font-size: 12px;
        font-weight: 400;
    }
`

