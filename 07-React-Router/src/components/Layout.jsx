import { Link, Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <>
      <nav className="nav">
        <ul className="list">
          <li className="list__item">
            <Link to="/">Home</Link>
          </li>
          <li className="list__item">
            <Link to="/actors">Actors</Link>
          </li>
          <li className="list__item">
            <Link to="/episodes">Episodes</Link>
          </li>
        </ul>
      </nav>
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};