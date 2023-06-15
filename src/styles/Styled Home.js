import styled from "styled-components";

const Texto = styled.p`
    font-weight:700;
    color: white;
`
const Mudar = styled.button`
    width:299px;
    height:52px;
    border-radius:8px;
    background-color:#FF4791;
    font-family:'Roboto';
    font-weight:700;
    font-size:14px;
    line-height:16.41px;
    color:#FFFFFF;
    margin:5px;
`
const Cancelar = styled.button`

    width:299px;
    height:52px;
    border-radius:8px;
    background-color:#FF4747;
    font-family:'Roboto';
    font-weight:700;
    font-size:14px;
    line-height:16.41px;
    color:#FFFFFF;
    margin:5px;
`
const Rodape = styled.footer`
    height:150px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    position:fixed;
    bottom:0;
    
`
const Cabecalho = styled.header`
    height:100px;
    width:375px;
    display:flex;
    justify-content:space-between;
    margin-left:38px;
    position:fixed;
    z-index:2;
    top:0;

`
const Box = styled.div`
 width:50%;
 height:100px;
 margin-left:200px;
 margin-top: 20px;
`
const Imagem = styled.img`
width:74.62px;
 height:50.87px;

`
const Caixa = styled.div`
    display:flex;
    align-items:flex-end;
`
const Main = styled.div`
    width:375px;
    height:400px;
    margin-top:110px;
    display:flex;
    flex-direction:column;
    align-items:center;
 p{
    font-family:'Roboto';
    font-weight:700;
    font-size:24px;
    line-height:28.13px;
    color:#FFFFFF;
    z-index:1;
    margin-bottom:50px;
}
`
export {Texto, Mudar, Cancelar, Rodape,Cabecalho,Box,Imagem,Caixa,Main}