import { Link } from "react-router-dom";
import styled from "styled-components";

function Signup(){
    return(
    <Container>
    <Form>
        <Formulario type='name' required placeholder="Nome"></Formulario>
        <Formulario type='number' required placeholder="CPF"></Formulario>
        <Formulario type='email' required placeholder="E-mail"></Formulario>
        <Formulario type='password' required placeholder="Senha"></Formulario>
    </Form>
        <Botao>CADASTRAR</Botao>
        <Link to='/'>Já possuí uma conta? Entre</Link>
    </Container>
    );
}
export default Signup;

const Container = styled.div`
    height:667px;
    width:375px;
    background-color:#0E0E13;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
`
const Formulario = styled.input`
    width:299px;
    height:52px;
    border-radius:8px;
    margin:16px;
`
const Botao = styled.button`
    width:308px;
    height:60px;
    border-radius:8px;
    background-color:#FF4791;
    margin:16px;
`
const Form = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
`
const Image = styled.img`
    width:299px;
    height:49px;
    margin-bottom:100px;
`
