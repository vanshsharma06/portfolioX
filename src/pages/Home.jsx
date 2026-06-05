import { lazy, Suspense, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen.jsx';
import Hero from '../components/Hero.jsx';
import { profile } from '../data/profile.js';

const About = lazy(() => import('../components/About.jsx'));
const Skills = lazy(() => import('../components/Skills.jsx'));
const Projects = lazy(() => import('../components/Projects.jsx'));
const GitHubStats = lazy(() => import('../components/GitHubStats.jsx'));
const Timeline = lazy(() => import('../components/Timeline.jsx'));
const Achievements = lazy(() => import('../components/Achievements.jsx'));
const Contact = lazy(() => import('../components/Contact.jsx'));

function Home() {
  useEffect(() => {
    document.title = `${profile.name} | ${profile.role}`;
  }, []);

  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingScreen inline />}>
        <About />
        <Skills />
        <Projects />
        <GitHubStats />
        <Timeline />
        <Achievements />
        <Contact />
      </Suspense>
    </>
  );
}

export default Home;
