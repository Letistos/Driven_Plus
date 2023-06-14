import styled from "styled-components";
import logo from '../assets/logo.png'
import { Link , useNavigate} from "react-router-dom";
import {Container,Formulario,Botao,Form,Image} from '../styles/Styled start'
import axios from "axios";
import { useState } from "react";

function Start(){
    const[mail,setMail]=useState("");
    const[pwd,setPwd]=useState("")

    const navigate = useNavigate();

    localStorage.setItem("mail", `${mail}`);
    localStorage.setItem("pwd", `${pwd}`);

    function signIn(e){
        e.preventDefault();
        console.log(mail);
        console.log(pwd);

        const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/auth/login';
        const obj = {email:mail,password: pwd};
    
        const promise = axios.post(URL,obj)
        promise.then( response => {
            console.log(response.data)
            if(response.data.membership === null){
                navigate('/subscriptions')

                const mail = localStorage.getItem("mail");
                console.log(mail);
                const pwd = localStorage.getItem("pwd");
                console.log(pwd);
            }
            if(response.data.membership !== null){
                navigate('/home')
            }
        });
        promise.catch(error => {
            alert(error.response.data.message)
            
        });

       
    }


   

    return(
        <Container>
        <Image src={logo} alt="logo driven plus"/>
        <Form onSubmit={signIn}>
            <Formulario type='email' required placeholder="E-mail" value={mail} onChange={(e) =>setMail(e.target.value)}></Formulario>
            <Formulario type='password'required placeholder="Senha" value={pwd} onChange={(e) =>setPwd(e.target.value)}></Formulario>
            <Botao type="submit">ENTRAR</Botao>
        </Form>
        
        <Link to='/sign-up'>Não possuí uma conta? Cadastre-se</Link>
        </Container>
    );
}
export default Start;

