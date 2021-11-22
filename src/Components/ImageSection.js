import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Márcio Sella Bahia</span></h4>
                <p className="paragraph">
                I’m a full stack developer that loves everything about coding. I currently study ReactJs, Node.js, React Native, Python and PHP. 
                <p>
                I am attending the third semester of the Faculty of Analysis and Systems Development at Estácio de Sá. ).
                </p>
                <p className="paragraph">
                I like to create beautiful interfaces to provide the user with a great experience. To create prototypes I use Figma, but I also know how to work with Adobe XD and I use Photoshop CC for edit images.
                </p>
                <p>
                I have also worked with C#, SQL Server, PHP, MySQL, Python and others. I like project architecture, writing clean code and applying good practices. 
                </p>

                <p className="paragraph">
                The only certainty I have is that learning is an endless road and I want to stay on it. So, I love technology, coffee and applying knowledge to solve problems, create solutions and impact lives.
                </p>
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Márcio Sella Bahia</p>
                        <p>: 45</p>
                        <p>: Brazilian </p>
                        <p>: Portuguese, English </p>
                        <p>: Brazil</p>
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
        img{
            width: 95%;
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
