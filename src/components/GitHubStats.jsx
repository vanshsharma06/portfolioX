import { FaCodeBranch, FaExternalLinkAlt, FaGithub, FaStar, FaUsers } from 'react-icons/fa';
import { profile } from '../data/profile.js';
import { useGitHubProfile } from '../hooks/useGitHubProfile.js';
import AnimatedSection from './AnimatedSection.jsx';
import SectionHeading from './SectionHeading.jsx';

function GitHubStats() {
  const { data, error, isLoading } = useGitHubProfile(profile.githubUsername);
  const user = data?.profile;
  const repos = data?.repos || [];

  return (
    <AnimatedSection id="github" className="section-padding">
      <div className="site-container">
        <SectionHeading
          eyebrow="GitHub"
          title="Live GitHub profile and repository signal."
          copy="The portfolio fetches profile data automatically from the GitHub API using the configured username."
        />

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <article className="glass-panel-strong p-6">
            {isLoading ? (
              <GitHubSkeleton />
            ) : error ? (
              <div className="rounded-lg border border-coral/30 bg-coral/10 p-5" role="alert">
                <p className="font-bold text-white">GitHub data is not available yet.</p>
                <p className="muted-copy mt-2 text-sm">{error}</p>
                <a
                  href={profile.links.github}
                  className="secondary-button mt-4 inline-block w-full"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub aria-hidden="true" />
                  View GitHub Profile
                </a>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-4">
                  <img
                    src={user.avatar_url}
                    alt={`${user.login} GitHub avatar`}
                    className="h-20 w-20 rounded-lg border border-white/10 object-cover"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <h3 className="truncate text-2xl font-black text-white">{user.name || user.login}</h3>
                    <p className="truncate text-sm font-semibold text-mint">@{user.login}</p>
                  </div>
                </div>

                {user.bio ? <p className="muted-copy mt-5 text-sm">{user.bio}</p> : null}

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <Metric icon={FaUsers} label="Followers" value={user.followers} />
                  <Metric icon={FaUsers} label="Following" value={user.following} />
                  <Metric icon={FaCodeBranch} label="Repos" value={user.public_repos} />
                </div>

                <a
                  href={user.html_url}
                  className="primary-button mt-6 w-full"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub aria-hidden="true" />
                  View GitHub Profile
                </a>
              </>
            )}
          </article>

          <div className="grid gap-4">
            {isLoading ? (
              Array.from({ length: 4 }).map((_, index) => <RepoSkeleton key={index} />)
            ) : (
              repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel group block p-5 transition duration-300 hover:-translate-y-1 hover:border-aqua/40 hover:bg-aqua/[0.06]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="truncate text-lg font-black text-white group-hover:text-aqua">
                        {repo.name}
                      </h3>
                      <p className="muted-copy mt-2 line-clamp-2 text-sm">
                        {repo.description || 'Repository with recent development activity.'}
                      </p>
                    </div>
                    <FaExternalLinkAlt className="mt-1 shrink-0 text-sm text-smoke group-hover:text-aqua" />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3 text-xs font-bold text-smoke">
                    {repo.language ? <span>{repo.language}</span> : null}
                    <span className="inline-flex items-center gap-1">
                      <FaStar aria-hidden="true" />
                      {repo.stargazers_count}
                    </span>
                    <span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
                  </div>
                </a>
              ))
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function Metric({ icon: Icon, label, value }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3 text-center">
      <Icon className="mx-auto text-mint" aria-hidden="true" />
      <p className="mt-2 text-xl font-black text-white">{value}</p>
      <p className="text-[11px] font-bold uppercase text-smoke">{label}</p>
    </div>
  );
}

function GitHubSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex items-center gap-4">
        <div className="h-20 w-20 rounded-lg bg-white/10" />
        <div className="grid flex-1 gap-3">
          <div className="h-5 w-3/4 rounded bg-white/10" />
          <div className="h-4 w-1/2 rounded bg-white/10" />
        </div>
      </div>
      <div className="mt-6 h-24 rounded-lg bg-white/10" />
    </div>
  );
}

function RepoSkeleton() {
  return (
    <div className="glass-panel animate-pulse p-5">
      <div className="h-5 w-1/2 rounded bg-white/10" />
      <div className="mt-4 h-4 w-full rounded bg-white/10" />
      <div className="mt-2 h-4 w-3/4 rounded bg-white/10" />
    </div>
  );
}

export default GitHubStats;
