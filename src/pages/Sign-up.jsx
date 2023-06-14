import { Link } from "react-router-dom";
import styled from "styled-components";
import {Container, Formulario,Botao,Form,Image} from '../styles/Styled sign-up'
import axios from "axios";
import { useState } from "react";


function Signup(){
    const[name,setName]=useState("");
    const[cpf,setCpf]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPwd]=useState("");

    function signUp(e){
        e.preventDefault();
        console.log(name);
        console.log(cpf);
        console.log(email);
        console.log(password);

        const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up';
        const obj = {email,name,cpf,password};
    
        const promise = axios.post(URL,obj)
        promise.then( response => {
            console.log(response)
        });
        promise.catch(error => {
            console.log('deu ruim')
            console.log(error.response)
        });

    }
    return(
    <Container>
    <Form onSubmit={signUp}>
        <Formulario type='name' required placeholder="Nome" value={name} onChange={(e) =>setName(e.target.value)}></Formulario>
        <Formulario type='number' required placeholder="CPF" value={cpf} onChange={(e) =>setCpf(e.target.value)}></Formulario>
        <Formulario type='email' required placeholder="E-mail" value={email} onChange={(e) =>setEmail(e.target.value)}></Formulario>
        <Formulario type='password' required placeholder="Senha" value={password} onChange={(e) =>setPwd(e.target.value)}></Formulario>
        <Botao type='submit'>CADASTRAR</Botao>
    </Form>
        
        <Link to='/'>Já possuí uma conta? Entre</Link>
    </Container>
    );
}
export default Signup;

