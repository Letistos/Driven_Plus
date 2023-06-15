import styled from 'styled-components'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {Box,Container,Titulo} from '../styles/Styled Planos'
import { Link , useNavigate} from "react-router-dom";


function Planos(){

    const [planos,setPlanos] = useState([]);

    const [ident,setId] = useState("");
    const navigate = useNavigate();

    useEffect(() =>{
        
    const pwd = localStorage.getItem("token");    
    const config = {
    headers: { Authorization:`Bearer ${pwd}`}
    };

    const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships';
    const promise = axios.get(URL,config)

        promise.then( (response) => {
            setPlanos(response.data)
            
        });

        promise.catch((error) => {
            console.log('deu ruim')
        });

    }, []);

    
    


    return (
        <Container>
            <Titulo>Escolha seu Plano</Titulo>
            {planos.map((opcao) => (

                <li key={opcao.id}>
                    <Link to={`/subscriptions/${opcao.id}`}>
                    <Box>
                        <img src={opcao.image} alt="logo plano driven plus" />
                        <p>{opcao.price}</p>
                    </Box>
                    </Link>
                </li>
            ))
            };

        </Container>
    );
}
export default Planos

