import { NavLink, Outlet } from 'react-router-dom';

const LayoutView = () => {
  return (
    <main className="h-screen grid place-content-center">
      <nav>
        <ul>
          <li className="flex items-center gap-3 mb-8">
            <NavLink
              to="/"
              className="bg-purple-500 p-2 text-white font-bold rounded-lg"
            >
              Events
            </NavLink>
            <NavLink
              to="/bookstore"
              className="bg-purple-500 p-2 text-white font-bold rounded-lg"
            >
              Bookstore
            </NavLink>
            <NavLink
              to="/book-catalog"
              className="bg-purple-500 p-2 text-white font-bold rounded-lg"
            >
              Book catalog
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </main>
  );
};

export default LayoutView;
