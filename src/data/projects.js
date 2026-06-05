import restaurantImg from '../assets/restaurant.png';
import ecommerceImg from '../assets/ecommerce.png';

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
    title: 'Realtime Chat Hub',
    subtitle: 'Messaging and collaboration app',
    description:
      'A realtime chat interface with conversation states, authentication-ready architecture, responsive layout, and notification-friendly UI.',
    stack: ['React', 'Node.js', 'Socket.io', 'Express', 'MongoDB'],
    github: 'https://github.com/sharmavansh932',
    demo: 'https://github.com/sharmavansh932',
    accent: '#4dd8ff',
    pattern: 'chat'
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
