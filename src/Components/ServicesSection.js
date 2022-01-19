import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import sites from '../img/web.png';
import app from '../img/app.png';
import banco from '../img/banco.png';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Serviços'} span={'serviços'} />
                <div className="services">
                    <ServiceCard 
                        image={sites} 
                        title={'Web Sites'} 
                        paragraph={'Desenvolvemos Sites totalmente responsivos e adaptáveis a qualquer dispositivo.'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={app} 
                            title={'Aplicativos'} 
                            paragraph={'Desenvolvemos Aplicativos Nativos para Android e IOS.'}
                        />
                    </div>
                    <ServiceCard 
                        image={banco} 
                        title={'Backend'} 
                        paragraph={'Criamos a regra de negócio da sua aplicação extruturando o banco de dados para a integração de webservices.'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
