import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import Particle from '../Components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Olá! Me chamo <span>Márcio Sella</span></h1>
                <p>Sou graduado em Análise e Desenvolvimento de Sistemas pela Universidade Estácio de Sá, desenvolvo Web Sites modernos e responsivos com React.js, Aplicativos Nativos Android e IOS com React Native e APIs utilizando Node.js. 
                </p>
                <p>Também desenvolvo em PHP, C, Java e Python. Domino Técnicas de TDD, Modelagem de Sistema com UML, Computação em Nuvem e Web Service em Linux entre outras Skills. 
                <p>
                   Entre em Contato e me deixe criar uma solução para seu problema de forma rápida e intuitiva, utilizando as mais modernas técnicas e tecnologias de Desenvolvimento de Software. 
                </p>    
                </p>
                <div className="icons">
                    <a href="https://www.facebook.com/marcio.sellabahia/" className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://github.com/marciobahia" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://www.youtube.com/channel/UCEiJTj5NODNuBPSPAgJCtcg" className="icon i-youtube">
                        <YoutubeIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
