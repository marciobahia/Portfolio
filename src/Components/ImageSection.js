import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';
import resumeM from '../img/resumeM.jpg';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
                <div className="right-content">
                <h4>I am <span>Full Stack Developer</span></h4>
                <p className="paragraph">
                That loves everything about coding. I currently study ReactJs, Node.js, React Native, Python and PHP. 
                <p>
                I'm in the fourth semester of the Faculty of Analysis and Systems Development at Estácio de Sá.
                </p>
                
                <p className="paragraph">
                I like to create beautiful interfaces to provide the user with a great experience. 
                <p></p>
                I can create responsive websites that fit any screen and IOS and Android Native Apps.
                </p>
                </p>  
                </div>    

                <div className="left-content"> 
                <img src={resumeM} alt=""/>
                <p>
                I've created several React.js and React Native projects using Node.js in Backeand. 
                <p></p>
                I can create and manipulate databases like MongoDb and MSql. 
                <p></p>
                </p>
                 </div>
                 
            <p className="paragraph">
                The only certainty I have is that learning is an endless road and I want to stay on it. So, I love technology, coffee and applying knowledge to solve problems, create solutions and impact lives.
                </p>
            </div>      
            
            <div className="right-content">
              
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
