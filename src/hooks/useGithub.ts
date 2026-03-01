import { useState, useEffect } from 'react';

interface GithubData {
  repos: number;
  followers: number;
  stars: number;
  loading: boolean;
  error: boolean;
}

export const useGithub = (username: string): GithubData => {
  const [data, setData] = useState<GithubData>({
    repos: 0,
    followers: 0,
    stars: 0,
    loading: true,
    error: false,
  });

  useEffect(() => {
    const fetchGithubStats = async () => {
      try {
        // Fetch User Profile and Repositories in parallel
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error('Failed to fetch');

        const userData = await userRes.json();
        const reposData = await reposRes.json();

        // Calculate total stars across all repositories
        const totalStars = reposData.reduce((acc: number, repo: any) => {
          return acc + repo.stargazers_count;
        }, 0);

        setData({
          repos: userData.public_repos,
          followers: userData.followers,
          stars: totalStars,
          loading: false,
          error: false,
        });
      } catch (err) {
        console.error("Github API Error:", err);
        setData(prev => ({ ...prev, loading: false, error: true }));
      }
    };

    fetchGithubStats();
  }, [username]);

  return data;
};