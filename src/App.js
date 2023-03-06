import Topo from './components/Topo';
import Corpo from './components/Corpo';
import Rodape from './components/Rodape';
import styled from 'styled-components';
import { GlobalStyleComponent } from 'styled-components';



function App() {
  return (
    <ContainerGeral>
      <Topo />
      <Corpo />
      <Rodape />
    </ContainerGeral>
    
  );
}
export default App;

const ContainerGeral = styled.div `
background-color: #FB6B6B;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;

`
