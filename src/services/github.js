const GITHUB_API = 'https://api.github.com';

export async function fetchGitHubSnapshot(username) {
  if (!username) {
    throw new Error('GitHub username is required.');
  }

  const [profileResponse, reposResponse] = await Promise.all([
    fetch(`${GITHUB_API}/users/${username}`),
    fetch(`${GITHUB_API}/users/${username}/repos?sort=updated&per_page=100`)
  ]);

  if (!profileResponse.ok) {
    throw new Error('Unable to load GitHub profile.');
  }

  if (!reposResponse.ok) {
    throw new Error('Unable to load GitHub repositories.');
  }

  const profile = await profileResponse.json();
  const repos = await reposResponse.json();

  const featuredRepos = repos
    .filter((repo) => !repo.fork)
    .sort((first, second) => {
      const stars = second.stargazers_count - first.stargazers_count;
      if (stars !== 0) return stars;
      return new Date(second.updated_at) - new Date(first.updated_at);
    })
    .slice(0, 4);

  return {
    profile,
    repos: featuredRepos
  };
}
