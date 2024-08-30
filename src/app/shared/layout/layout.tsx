import { Outlet } from 'react-router-dom';
import { Footer, NavBar } from '../components';

function Layout() {
  return (
    <div>
      <NavBar />
      
      <div className="px-1 py-24 pb-5">
        <Outlet />
      </div>

      <Footer/>
    </div>
  );
}

export default Layout;
