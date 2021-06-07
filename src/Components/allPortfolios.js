import port1 from '../img/portImages/port1.png';
import port2 from '../img/portImages/port2.png';
import port3 from '../img/portImages/port3.png';
import port4 from '../img/portImages/port4.png';

const portfolios = [
    {
        id: 1,
        category: 'JavaScript',
        link1: 'https://github.com/pamtel/My-movie-app',
        link2: 'https://pamtel-movie-app.netlify.app',
        icon1: 'G',
        icon2: 'N',
        image: port1,
        title: 'Movie App built with vanilla javascript',
    },
    {
        id: 2,
        category: 'css',
        link1: 'https://github.com/pamtel/knock-lounge',
        link2: 'https://pamtel-lounge-website.netlify.app',
        icon1: 'G',
        icon2: 'N',
        image: port2,
        title: 'Website built with html and css',
    },
    {
        id: 3,
        category: 'React',
        link1: 'https://github.com/pamtel/ecommerce',
        link2: 'https://pamtel-ecommerce.netlify.app/',
        icon1: 'G',
        icon2: 'N',
        image: port3,
        title: 'Ecommerce website built with react',
    },
    {
        id: 4,
        category: 'Mernstack',
        link1: 'https://github.com/pamtel/mern-shopping-cart-client',
        link2: 'https://mern-shopping-cart-client.netlify.app/',
        icon1: 'G',
        icon2: 'N',
        image: port4,
        title: 'Fullstack Ecommerce site built with react, redux, mongodb, node & express',
    },
]
export default portfolios