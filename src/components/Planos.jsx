import styled from 'styled-components'
import axios from 'axios'

import dados from './Plano'
import branco from '../assets/LogoBranca.png'
import amarelo from '../assets/LogoAmarela.png'
import verde from '../assets/LogoVerde.png'

function Planos(){

    const logos=[branco,amarelo,verde];    
    // const config = {
    //     headers: { Authorization: `Bearer ${5MH3GBE7JWFZU8b8ft1wY2FM}` }
    // };
    // const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships';
    // const promise = axios.get(URL, { headers })
    // promise.then( (response) => {
    //     console.log(response.data)
    // });
    // promise.catch((error) => {
    //     console.log('deu ruim')
    // });

    return (
        <Container>
            <Titulo>Escolha seu Plano</Titulo>
            {dados.map((opcao, i) => (

                <li key={opcao.plano}>
                    <Box>
                        <img src={logos[i]} alt="logo planos driven plus" />
                        <p>{opcao.preco}</p>
                    </Box>
                </li>
            ))
            };

        </Container>
    );
}
export default Planos

const Box = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:290px;
    height:180px;
    border:3px solid #7E7E7E;
    border-radius:12px;
    margin-top:10px;


    p{
        font-family:'Roboto';
        font-weight:700;
        font-size:24px;
        line-height:28.13px;
        color:#FFFFFF;
    }
    img{
        margin-right:15px;
    }
`
const Container = styled.ul`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    margin-top:5px;
    
`
const Titulo = styled.p`
    font-family:'Roboto';
    font-weight:700;
    font-size:32px;
    line-height:37.5px;
    color:#FFFFFF;

`