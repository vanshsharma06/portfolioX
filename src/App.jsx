import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<LoadingScreen inline />}>
                <Home />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
