import { useEffect, useState } from 'react';
import { fetchGitHubSnapshot } from '../services/github.js';

export function useGitHubProfile(username) {
  const [state, setState] = useState({
    data: null,
    error: '',
    isLoading: true
  });

  useEffect(() => {
    let isMounted = true;

    async function loadProfile() {
      setState({ data: null, error: '', isLoading: true });

      try {
        const data = await fetchGitHubSnapshot(username);
        if (isMounted) {
          setState({ data, error: '', isLoading: false });
        }
      } catch (error) {
        if (isMounted) {
          setState({
            data: null,
            error: error.message || 'Unable to load GitHub data.',
            isLoading: false
          });
        }
      }
    }

    loadProfile();

    return () => {
      isMounted = false;
    };
  }, [username]);

  return state;
}
