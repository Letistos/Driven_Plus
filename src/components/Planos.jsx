import styled from 'styled-components'
import dados from './Plano'
import branco from '../assets/LogoBranca.png'
import amarelo from '../assets/LogoAmarela.png'
import verde from '../assets/LogoVerde.png'

function Planos(){

    const logos=[branco,amarelo,verde];    

    return (
        <ul>
            {dados.map((opcao, i) => (

                <li key={opcao.plano}>
                    <div>
                        <img src={logos[i]} alt="logo planos driven plus" />
                        <p>{opcao.preco}</p>
                    </div>
                </li>
            ))
            };

        </ul>
    );
}
export default Planos

