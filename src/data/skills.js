import {
  FaBootstrap,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
  FaServer,
  FaUserShield
} from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMysql, SiPostman, SiTailwindcss } from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';
import { VscCode } from 'react-icons/vsc';
import { SiOpenai, SiGithubcopilot } from 'react-icons/si';
import { FaBrain, FaCode, FaRobot } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';

export const skillGroups = [
  {
    category: 'Frontend',
    summary: 'Interfaces that feel sharp, responsive, and recruiter-ready.',
    skills: [
      { name: 'HTML', level: 95, icon: FaHtml5 },
      { name: 'CSS', level: 92, icon: FaCss3Alt },
      { name: 'JavaScript', level: 88, icon: FaJs },
      { name: 'React', level: 86, icon: FaReact },
      { name: 'Tailwind CSS', level: 88, icon: SiTailwindcss },
      { name: 'Bootstrap', level: 82, icon: FaBootstrap }
    ]
  },
  {
    category: 'Backend',
    summary: 'APIs, server logic, and product foundations that scale cleanly.',
    skills: [
      { name: 'Node.js', level: 84, icon: FaNodeJs },
      { name: 'Express.js', level: 82, icon: SiExpress },
      { name: 'REST APIs', level: 85, icon: FaServer },
      { name: 'JWT Authentication', level: 78, icon: FaUserShield }
    ]
  },
  {
    category: 'Database',
    summary: 'Structured data models for practical full stack workflows.',
    skills: [
      { name: 'MongoDB', level: 82, icon: SiMongodb },
      { name: 'MySQL', level: 78, icon: SiMysql },
      { name: 'Database Design', level: 80, icon: FaDatabase }
    ]
  },
  {
    category: 'Programming',
    summary: 'Problem solving foundations with strong language fundamentals.',
    skills: [
      { name: 'C++', level: 82, icon: TbBrandCpp },
      { name: 'Python', level: 78, icon: FaPython }
    ]
  },
  {
    category: 'Tools',
    summary: 'Developer workflow tools for collaboration and delivery.',
    skills: [
      { name: 'Git', level: 86, icon: FaGitAlt },
      { name: 'GitHub', level: 88, icon: FaGithub },
      { name: 'Postman', level: 82, icon: SiPostman },
      { name: 'VS Code', level: 90, icon: VscCode }
    ]
  },
  {
  category: 'AI Tools',
  summary: 'AI-powered tools and workflows for development, automation, and productivity.',
  skills: [
    { name: 'ChatGPT', level: 92, icon: SiOpenai },
    { name: 'Claude', level: 90, icon: FaBrain },
    { name: 'Claude Code', level: 88, icon: FaCode },
    { name: 'OpenAI Codex', level: 85, icon: FaRobot },
    { name: 'GitHub Copilot', level: 82, icon: SiGithubcopilot },
    { name: 'Prompt Engineering', level: 85, icon: BsStars }
  ]
}
];
