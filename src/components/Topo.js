import logo from '../assets/logo.png';
import styled from 'styled-components';

export default function Topo (){
    return (
        <ContainerTopo>
            <img src={logo}></img>
            <h1>ZapRecall</h1>
        </ContainerTopo>
        
    )
}

const ContainerTopo = styled.div `
width: 290px;
height: 60px;
display: flex;
margin: 35px 60px 25px 75px;

    h1 {
        width: 203px;
        height: 44px;
        font-size: 36px;
        font-weight: 400;
        color: #FFFFFF;
        font-family: 'Righteous', cursive;

    }
    img {
        width: 50px;
        height: 60px;
    }
`