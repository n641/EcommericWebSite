import { Link, useLocation } from 'react-router-dom';
import { IoHomeSharp } from 'react-icons/io5';
import { IoIosArrowForward } from "react-icons/io";
function BreadCramp() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const breadcrumbs = pathnames.map((route, index) => {
    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
    return (
      <span key={routeTo} className="flex items-center gap-1 hover:text-[var(--Gold-color)]">
        {route === 'EcommericWebSite' && <IoHomeSharp />}
        <Link to={routeTo} className='font-semibold'>
          {route === 'EcommericWebSite' ? 'Home' : route}
        </Link>
        {index < pathnames.length - 1 && <IoIosArrowForward />}
      </span>
    );
  });

  return (
    <nav className="flex items-center gap-2 mt-0.5">
      {breadcrumbs}
    </nav>
  );
}

export { BreadCramp };
