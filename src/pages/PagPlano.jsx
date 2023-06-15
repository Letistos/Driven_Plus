import styled from "styled-components";
import {Container, Cabecalho, Main, BoxBeneficios, Texto, BigInput, SmallInput, Botao, Formulario, Modal, ModalBackground} from '../styles/Styled PagPlano'
import seta from '../assets/Vector.png'
import beneficios from '../assets/beneficios.png'
import dinheiro from '../assets/dinheiro.png'
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
import UserContext from "../UserContext";
import axios from "axios";


function PagPlano(){
    const { setAndPersistMembership } = useContext(UserContext);

    const parametro = useParams();

    const navigate = useNavigate();
    

    const [option,setOption] = useState(undefined);

    const[cardName,setName]=useState("");
    const[cardNumber,setNumber]=useState("");
    const[securityNumber,setSecurity]=useState("");
    const[expirationDate,setExpiration]=useState("");
    const[membershipId,setId]=useState("");

    const [show, setShow] =useState(false)
    const [showModal, setShowModal] =useState(false)

    function signPlan(e){
        e.preventDefault();

        const obj={membershipId,cardName,cardNumber,securityNumber,expirationDate }

        const Pwd = localStorage.getItem("token");    
        const Config = {
        headers: { Authorization:`Bearer ${Pwd}`}
        };

        const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions';
    
        const promise = axios.post(URL,obj,Config)
        promise.then( resposta => {

            alert('assinatura do plano concluída')

            navigate('/home')

            setAndPersistMembership(response.data.membership);
          
        });
        promise.catch(error => {
            alert(error.response)
        });
    }
     function modal(){
        setShow(true)
        setShowModal(true)
    }
   
    function modalN(){
        if(show === true && showModal === true){
            setShow(false)
            setShowModal(false)
        }
 }

    useEffect(() =>{
        
        const Pwd = localStorage.getItem("token");    
        const Config = {
        headers: { Authorization:`Bearer ${Pwd}`}
        };
    
        const url = `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${parametro.idPlano}`;
        const promise = axios.get(url,Config)
    
            promise.then( (response) => {
                console.log(response.data);
                setOption(response.data);
                setId(response.data.id);
               
            });
    
            promise.catch((error) => {
                console.log('deu ruim');
            });
    
        }, []);
        if(option === undefined){
            return<div>Carregando...</div>
        }

    return(
        <Container>
            { show &&
            <ModalBackground>
                
            </ModalBackground>
            }
            {
                showModal &&
            <Modal>
                <p>Tem certeza que deseja assinar o plano {option.name} ({option.price})?</p>
                <div>
                <button onClick={modalN}>Não</button>
                <button onClick={signPlan}>SIM</button>
                </div>
            </Modal>
            }
            

            <Cabecalho>
                <Link to='/subscriptions'>
                <img src={seta} alt="seta de retorno"/>
                </Link>
            </Cabecalho>
            <Main>
                <img src={option.image} alt="logo do plano"></img>
                <p>{option.name}</p>
            </Main>
            <div>
                <BoxBeneficios>
                    <img src={beneficios} alt="icone beneficios"/>
                    <p>Benefícios:</p>
                </BoxBeneficios>
                <ul>  
                    {option.perks.map((list) => (
                        <Texto key={list.id}>{list.id}.{list.title}</Texto>
                    ))};                 
                   
                </ul>

                <div>
                <BoxBeneficios>
                    <img src={dinheiro} alt="icone preço"/>
                    <p>Preço:</p>
                </BoxBeneficios>
                <div>
                    <Texto>R$ {option.price} cobrados mensalmente</Texto>
                </div>
                </div>
            </div>
            <Formulario>
                <BigInput type="text" placeholder="Nome impresso no cartão" required value={cardName} onChange={(e) =>setName(e.target.value)}></BigInput>
                <BigInput type="number" placeholder="Digitos do cartão" required value={cardNumber} onChange={(e) =>setNumber(e.target.value)}></BigInput>
                <SmallInput type="number" placeholder="Código de segurança" required value={securityNumber} onChange={(e) =>setSecurity(e.target.value)}></SmallInput>
                <SmallInput type="number" placeholder="Validade" required value={expirationDate} onChange={(e) =>setExpiration(e.target.value)}></SmallInput>
                
            </Formulario>
            <Botao onClick={modal}>ASSINAR</Botao>
            
            

            
        </Container>

        
    );
}
export default PagPlano

