/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import Particle from '../Components/Particle';
import resumeG from '../img/resumeG.jpg';


function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
              
            </div>            
            <div className="typography"><br></br><br></br>
            <br></br><br></br><br></br><br></br>
            <img src={resumeG} alt=""/>
                <div><br></br>
                    </div>
                    <h1>Olá! <br></br>Me chamo <span>Márcio Sella </span></h1>

                <br></br>

                <p>Sou Graduado em Análise e Desenvolvimento de Sistemas pela <span>Universidade Estácio de Sá</span>. 

                 <br></br><br></br>

                 Pós-Graduando em Tecnologias e Desenvolvimento Web e Mobile no <span>Centro Universitário FAESA</span>.
                 <br></br><br></br>
                Desenvolvo Web Sites modernos e responsivos, aplicativos nativos Android e IOS com os FrameWorks de JavaScript <span>React.js</span> no Frontend, 
                <span> React Native</span> no Mobile e <span>Node.js</span> no Backend.
            </p>
            <br></br>
            <p>Também desenvolvo em <span>Python</span>, <span>Java</span>, <span>PHP</span> e <span>C</span>, domino as técnicas de Web Designer, 
                Computação em Nuvem e Web Services em <span>Linux</span>, Big Data em Python, Padrões de Projeto de Software com Java, Cloud, IOT e Indústria 4.0.    
            </p> 
            <br></br> 
            <p>Entre em Contato e me deixe criar uma solução para seu problema de forma rápida e intuitiva, utilizando as mais modernas técnicas e tecnologias de Desenvolvimento de Software.  
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
            </div><br></br>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 65%;
        left: 50%;

        transform: translate(-50%, -50%);
        text-align: border;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 2rem;
            margin-bottom: 3rem;
        
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 10px solid var(--primary-color);
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
                    border: 10px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 10px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
