import restaurantImg from '../assets/restaurant.png';
// import ecommerceImg from '../assets/ecommerce.png';

export const projects = [
 {
  title: 'Restaurant Ordering System',
  subtitle: 'QR Based Restaurant Management',
  description:
    'QR menu ordering system with cart, order management and admin dashboard.',
  stack: ['React', 'Node.js', 'Express', 'MongoDB'],
  github: 'https://github.com/sharmavansh932/Restaurant_website',
  demo: 'https://your-vercel-link.vercel.app',
  image: restaurantImg,
  accent: '#45f0b5',
  pattern: 'pipeline'
},
  {
    title: 'CommerceFlow Store',
    subtitle: 'Modern e-commerce experience',
    description:
      'A responsive store interface with product discovery, cart state, checkout-ready data models, and a polished admin-friendly structure.',
    stack: ['React', 'JavaScript', 'Express', 'MongoDB', 'Razorpay'],
    github: 'https://github.com/sharmavansh932',
    demo: 'https://github.com/sharmavansh932',
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
