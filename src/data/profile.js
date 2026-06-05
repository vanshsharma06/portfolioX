export const profile = {
  name: 'Vansh Sharma',
  role: 'Full Stack Developer',
  headline: 'Full Stack Developer crafting polished web products.',
  shortIntro:
    'I build responsive, reliable applications with React, Node.js, databases, and a strong eye for clean user experiences.',
  email: 'sharmavansh932@gmail.com',
  location: 'India',
  availability: 'Open to internships, full-time roles, freelance work, and product teams.',
  githubUsername: import.meta.env.VITE_GITHUB_USERNAME || 'vanshsharma06',
  resumeUrl: import.meta.env.VITE_RESUME_URL || '/resume.pdf',
  links: {
    github: 'https://github.com/vanshsharma06',
    linkedin: 'https://www.linkedin.com/in/vansh-sharma-063258261/',
    whatsapp: 'https://wa.me/910000000000',
    gmail: 'mailto:sharmavansh932@gmail.com'
  },
  metrics: [
    { label: 'Core Stack', value: 'MERN' },
    { label: 'Focus', value: 'Product UI' },
    { label: 'Availability', value: 'Open' }
  ],
  summary:
    'I enjoy turning ideas into production-ready web applications that are fast, accessible, and easy to maintain. My work combines frontend detail, backend structure, API integrations, and practical deployment thinking so teams can move from concept to usable product with confidence.',
  education: [
    {
      title: 'B.Tech CSE (Artificial Intelligence) | 2022 – 2026',
      detail:
        'Graduated with a specialization in Artificial Intelligence, gaining expertise in Data Structures & Algorithms, Database Management Systems, Web Development, Machine Learning, and Software Engineering.'
    }
  ],
  
  internship:
    'Contributed to LLM post-training projects through data validation, annotation, and quality assurance. Promoted to Quality Leader, where I managed a small team, reviewed work quality, tracked performance, and resolved project-related issues.',
  objective:
    'To contribute to innovative products by combining Full Stack Development and Artificial Intelligence, building scalable solutions that deliver meaningful user experiences and real-world impact.'
};

export const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
};
