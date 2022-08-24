/* eslint-disable jsx-a11y/alt-text */
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
                <h1>Olá! Me chamo <span>Márcio Bahia</span></h1><br></br>
                <p>Sou Graduado em Análise e Desenvolvimento de Sistemas pela Universidade Estácio de Sá, 
                desenvolvo Web Sites modernos e responsivos, aplicativos nativos Android e IOS com as tecnologias React.js no Frontend, 
                React Native no Mobile e Node.js no Backend.
                <p>
<img src="https://www.luiztools.com.br/wp-content/uploads/2020/06/reactJS.png" height="60px"/>
&nbsp;  
 <img src="https://www.theconsolelogs.com/react/react-native.png" height="60px"/>
&nbsp;
<img src="https://miro.medium.com/max/1131/0*JH_HgIXBQvuenmUl.jpg" height="60px"/>  
&nbsp;
            </p>
            </p>
            <p>Também desenvolvo em Python, Java e PHP
            <p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Python_logo_and_wordmark.svg/1280px-Python_logo_and_wordmark.svg.png" height="35px"/>
&nbsp;  
                 <img src="https://dev.java/assets/images/java-logo-vert-blk.png" height="65px"/>
&nbsp;
                <img src="https://assets.zabbix.com/img/brands/php.svg" height="35px"/>  
&nbsp;  
        </p>
            <p>Entre em Contato e me deixe criar uma solução para seu problema de forma rápida e intuitiva, utilizando as mais modernas técnicas e tecnologias de Desenvolvimento de Software.
                    
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
        text-align: border;
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
