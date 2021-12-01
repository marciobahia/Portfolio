import css1 from '../img/portImages/cv_css.png';
import img2 from '../img/portImages/tindev.jpg';
import img3 from '../img/portImages/hero.jpg';
import img4 from '../img/portImages/Ecoleta.jpg';
import img5 from '../img/portImages/aircnc.jpg';
import img6 from '../img/portImages/gameplay.jpg';
import img7 from '../img/portImages/letmeask.jpg';

const portfolios = [
    {
        id: 1,
        category: 'React.js',
        image: css1,
        link1: 'https://github.com/marciobahia/Instadevs/blob/master/README.md',
        link2: 'https://www.google.com',
        title: 'InstaDev ',
        text: 'Recreating instagram feed with React.js, ReactNative, Mongoose, Axios and Node.js.'
    },
    {
        id: 2,
        category: 'React Native',
        image: img2,
        link1: 'https://github.com/marciobahia/Tindev',
        link2: 'https://www.google.com',
        title: 'Tindev',
        text: 'Tindev is an Application inspired by Tinder but focused on Developers.'
    },
    {
        id: 3,
        category: 'Node.js',
        image: img3,
        link1: 'https://github.com/marciobahia/Hero',
        link2: 'https://www.google.com',
        title: 'Hero',
        text: 'Hero is an Application that aims to Connect people who can help financially in NGOs, where an NGO publishes through its Web interface'
    },
    {
        id: 4,
        category: 'Axios' ,
        image: img4,
        link1: 'https://github.com/marciobahia/Ecoleta',
        link2: 'https://www.google.com',
        title: 'Ecoleta',
        text: 'Application that aims to connect companies that collect waste there are people who aim to dispose of this waste correctly.'
    },
    {
        id: 5,
        category: 'Expo',
        image: img5,
        link1: 'https://github.com/marciobahia/Aircnc',
        link2: 'https://www.google.com',
        title: 'AirCnc',
        text: 'Aircnc is an Application focused Developers. The system allows the user to sign up with email and which technology is of interest to them.'
    },
    {
        id: 6,
        category: 'FareBase',
        image: img6,
        link1: 'https://github.com/marciobahia/Gameplay',
        link2: 'https://www.google.com',
        title: 'Gameplay',
        text: 'Gameplay is a project where game lovers can schedule matches with other users'
    },
    {
        id: 7,
        category: 'Typescript',
        image: img7,
        link1: 'https://github.com/marciobahia/Letmeask',
        link2: 'https://www.google.com',
        title: 'LetMeAsk',
        text: 'Let Me Ask is a platform built to let you gather questions from your viewers during your stream and let them vote for which are the best questions for you to answer.'
    }
]

export default portfolios;