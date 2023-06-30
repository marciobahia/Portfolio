import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';
import resumeM from '../img/resumeM.jpg';
import resumeD from '../img/resumeD.jpg';
import resumeE from '../img/resumeE.jpg';
function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
                <div className="right-content">
                <h4> <span>Desenvolvedor Full Stack</span></h4>
                <p className="paragraph">
                Sou Graduado em Análise e Desenvolvimento de Sistemas e Póps-graduado em Desenvolvimento Full Stack. <br></br>Atualmente estudo React.js, Node.js, React Native, Python.  
                <p>
                </p><br></br>
                <img src={resumeM} alt=""/>
                <p className="paragraph">
                Gosto de criar interfaces bonitas para proporcionar uma ótima experiência ao usuário.
                <p></p>
                Posso criar sites responsivos que se adaptam a qualquer tela e aplicativos nativos IOS e Android.
                </p>
                </p>  
                </div>    

                <div className="left-content"> 
                <img src={resumeD} alt=""/>
                <p>
                <br></br>
                Criei vários projetos React.js e React Native usando Node.js no Backeand.
                <p></p>
                Posso criar e manipular bancos de dados como MongoDb e MYSql. 
                </p>
                </div>
                <br></br>
                <img src={resumeE} alt=""/>
            <p className="paragraph">
                <br></br>
                A única certeza que tenho é que aprender é um caminho sem fim e quero continuar nele. Então, adoro tecnologia, café e aplicar conhecimento para resolver problemas, criar soluções e impactar vidas.
                </p>
            </div>      
            
            <div className="right-content">
              
                <div className="about-info">
                    <div className="info-title">
                        <p>Nome</p>
                        <p>Idade</p>
                        <p>Nacionalidade </p>
                        <p>Linguas </p>
                        <p>Localização</p>
                        <p>Serviços</p>
                    </div>
                    <div className="info">
                        <p>: Márcio Sella Bahia</p>
                        <p>: 46</p>
                        <p>: Brasileiro </p>
                        <p>: Portuguese, English </p>
                        <p>: Brasil </p>
                        <p>: Freelance</p>
                    </div>
                </div>
                <PrimaryButton title={'Download Cv'} />
            </div>
            
        </ImageSectionStyled>
        
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        margin-left:none;
      
        img{
            width: 90%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
