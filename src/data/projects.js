import restaurantImg from '../assets/restaurant.png';
import ecommerceImg from '../assets/ecommerce.png';
import estateXImg from '../assets/estateX.png';

export const projects = [
 {
  title: 'Restaurant Ordering System',
  subtitle: 'QR Based Restaurant Management',
  description:
    'QR menu ordering system with cart, order management and admin dashboard.',
  stack: ['React', 'Node.js', 'Express', 'MongoDB'],
  github: 'https://github.com/vanshsharma06/Restaurant_website',
  demo: 'https://restaurant-website-zeta-swart.vercel.app/',
  image: restaurantImg,
  accent: '#45f0b5',
  pattern: 'pipeline'
},
  {
  title: 'E-Commerce',
  subtitle: 'Full-Stack Online Shopping Platform',
  description:
    'A full-stack e-commerce application featuring product browsing, category filtering, cart management, secure user authentication, and online payment integration for a seamless shopping experience.',
  stack: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
  github: 'https://github.com/vanshsharma06/ECommerce',
  demo: 'https://e-commerce-one-tau-87.vercel.app/',
  image: ecommerceImg,
  accent: '#f8b84e',
  pattern: 'commerce'
},
  {
  title: 'EstateX',
  subtitle: 'Modern Real Estate Platform',
  description:
    'A responsive real estate platform that allows users to explore properties, filter listings by category, view detailed property information, and connect with agents through an intuitive and user-friendly interface.',
  stack: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
  github: 'https://github.com/vanshsharma06/estateX',
  demo: 'https://estate-x-pearl.vercel.app/',
  accent: '#4dd8ff',
  image: estateXImg,
  pattern: 'realestate'
},
  {
    title: 'Portfolio Analytics',
    subtitle: 'Developer profile insights',
    description:
      'A compact analytics product that visualizes repository health, contribution trends, and portfolio performance signals for developers.',
    stack: ['React', 'GitHub API', 'Tailwind CSS', 'Charts', 'Vite'],
    github: 'https://github.com/sharmavansh932',
    demo: 'https://github.com/sharmavansh932',
    accent: '#ff7a68',
    pattern: 'analytics'
  }
];
