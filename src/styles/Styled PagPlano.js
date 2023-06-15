import styled from "styled-components";

const Container = styled.div`
    width:375px;
    height:667px;
`
const Cabecalho = styled.header`
    width:100%;
    height:60px;
    padding-left:25px;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    img{
        width:28px;
        height:27.29px;
    }

`
const Main = styled.div`

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:20px;

    img{
        width:139.38px;
        height:95.13px;
    }
    p{
        font-family:'Roboto';
        font-weight:700;
        font-size:32px;
        line-height:37.5px;
        color:#FFFFFF;
    }
`
const BoxBeneficios = styled.div`
    display:flex;
    margin-left:44px;
    margin-top:22px;
    margin-bottom:5px;
    img{
        width:auto;
        height:16px;
        color:#FF4791;
        margin-right:5px;
    }
    p{
        font-family:'Roboto';
        font-weight:400;
        font-size:16px;
        line-height:18.75px;
        color:#FFFFFF;
    }
`
const Texto = styled.li`
    font-family:'Roboto';
    font-weight:400;
    font-size:14px;
    line-height:16.41px;
    color:#FFFFFF;
    margin-left:44px;
`
const BigInput = styled.input`
    width:299px;
    height:52px;
    border-radius:8px;
    font-family:'Roboto';
    font-weight:400;
    font-size:14px;
    line-height:16.41px;
    color:#7E7E7E;
    margin-top:8px;
    margin-left:14px;
    padding-left: 14px;
`
const SmallInput = styled.input`
    width:145px;
    height:52px;
    border-radius:8px;
    font-family:'Roboto';
    font-weight:400;
    font-size:14px;
    line-height:16.41px;
    color:#7E7E7E;
    margin-top:8px;
    margin-left:8px;
    padding-left: 6.79px;
    
    
`
const Botao = styled.button`
    background-color:#FF4791;
    width:299px;
    height:52px;
    border-radius:8px;
    font-family:'Roboto';
    font-weight:700;
    font-size:14px;
    line-height:16.41px;
    color:#FFFFFF;
    margin-left:45px;
    margin-top:10px;
`
const Formulario = styled.form`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
`

const Modal = styled.div`
    width:248px;
    height:210px;
    background-color:#FFFFFF;
    border-radius:12px;
    padding:22px;
    position:absolute;
    margin-top:198px;
    margin-left:70px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:column;
    
    p{
        font-family:'Roboto';
        font-weight:700;
        font-size:18px;
        line-height: 21.09px;
        
    }
    button{
        width:95px;
        height:52px;
        background-color:#CECECE;
        border-radius:8px;
        margin:3px;
        font-family:'Roboto';
        font-weight:700;
        font-size:14px;
        line-height: 16.41px;
        color:#FFFFFF;

    }
    button:hover { background: #FF4791; }
`
const ModalBackground = styled.div`

    width:375px;
    height:667px;
    opacity: 0.75;
    background-color:black;
    position:absolute;
    
    
`
export {Container, Cabecalho, Main, BoxBeneficios, Texto, BigInput, SmallInput, Botao, Formulario,Modal,ModalBackground}