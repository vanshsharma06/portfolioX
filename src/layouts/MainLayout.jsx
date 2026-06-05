import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import BackToTop from '../components/BackToTop.jsx';
import Footer from '../components/Footer.jsx';
import LoadingScreen from '../components/LoadingScreen.jsx';
import Navbar from '../components/Navbar.jsx';
import ScrollProgress from '../components/ScrollProgress.jsx';

function MainLayout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setIsLoading(false), 700);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {isLoading ? <LoadingScreen /> : null}
      <ScrollProgress />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default MainLayout;
