import qs from 'query-string';
import GithubLogo from '../../assets/images/githubicon.png';
import Button from '../Form/Button';

export default function LoginWithGithub() {
  function redirectToGitHub() {
    const GITHUB_URL = 'https://github.com/login/oauth/authorize';
    const params = {
      client_id: process.env.REACT_APP_CLIENT_ID,
      redirect_uri: process.env.REACT_APP_REDIRECT_URI,
      scope: 'user repo',
      response_type: 'code',
    };
    const queryString = qs.stringify(params);

    window.location.href = `${GITHUB_URL}?${queryString}`;
  }
  return (
    <Button variant="contained" fullWidth onClick={redirectToGitHub}>
      <p>Entrar com GitHub</p> <img width="60" height="60" src={GithubLogo} alt="githubimage" />
    </Button>
  );
}
