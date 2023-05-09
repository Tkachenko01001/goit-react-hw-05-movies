import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>
        <ul className="header-list">
          <li className="header-list__line">
            <NavLink to="/" className='header-list__link'>Home</NavLink>
          </li>
          <li className="header-list__line">
            <NavLink to="/movies" className='header-list__link'>Movies</NavLink>
          </li>
        </ul>
      </header>
      <main className="container">
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      </main>
    </>
  );
};
