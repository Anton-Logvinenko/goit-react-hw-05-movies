import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// Стили
import { Conteiner, Link, List, Header } from './Layout.styled';

const Layout = () => {
  return (
    <Conteiner>
      <Header>
        <nav>
          <List>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Movies">Movies</Link>
            </li>
          </List>
        </nav>
      </Header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
   
          <Outlet />
        </Suspense>
      </main>
    </Conteiner>
  );
};

export default Layout;
