import styled from "styled-components";
import {Texto, Mudar, Cancelar, Rodape,Cabecalho,Box,Imagem,Caixa,Main} from "../styles/Styled Home"
import user from '../assets/user.png'
import plano from "../assets/1.png"
function Home(){
    return(
        <>
        <Cabecalho>
            <Caixa>
            <Imagem src={plano} alt="icone usuário"/></Caixa>
            <Box>
            < img src={user} alt="icone usuário"/></Box>
        </Cabecalho>

        <Main>
            <p>Olá, fulano</p>
            <Mudar>Mudar plano</Mudar>
            <Mudar>Mudar plano</Mudar>
            <Mudar>Mudar plano</Mudar>
            <Mudar>Mudar plano</Mudar>
        </Main>
        
        <Rodape>
            <Mudar>Mudar plano</Mudar>
            <Cancelar>Cancelar plano</Cancelar>
        </Rodape>
        </>
    );
}
export default Home;