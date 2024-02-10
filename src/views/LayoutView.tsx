import { Outlet } from 'react-router-dom';

const LayoutView = () => {
  return (
    <main className="h-screen grid place-content-center">
      <Outlet />
    </main>
  );
};

export default LayoutView;
