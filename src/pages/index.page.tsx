import { FC } from 'react';
import '../styles/index.page.scss';

export const IndexPage: FC = () => {
  return (
    <div className="page">
      <header className="welcome-header">
        <h1>Welcome!</h1>
      </header>
      <main className="content">
        <button>Sign In</button>
      </main>
      <footer>
        Oauth2.0 / OIDC demo application by <span>Joren</span>
      </footer>
    </div>
  );
};
