import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
     const { user, logoutUser } = useAuth();

  const handleLogout = () => {
    logoutUser();
  };

  const links = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/tutors">Tutors</Link></li>

      {
        user &&
        <>
          <li><Link to="/addTutor">Add Tutor</Link></li>
          <li><Link to="/myTutors">My Tutors</Link></li>
          <li><Link to="/myBookedSessions">Booked Sessions</Link></li>
        </>
      }
    </>
  );
    return (
            <div className="navbar bg-base-100 shadow-sm px-4">

      <div className="navbar-start">

        <div className="dropdown">

          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>

        </div>

        <Link to="/" className="text-2xl font-bold">
          MediQueue
        </Link>

      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      <div className="navbar-end">

        {
          user ? (
            <div className="flex items-center gap-3">

              <img
                src={user.photoURL}
                alt=""
                className="w-10 h-10 rounded-full"
              />

              <button
                onClick={handleLogout}
                className="btn btn-primary"
              >
                Logout
              </button>

            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary"
            >
              Login
            </Link>
          )
        }

      </div>

    </div>

    );
};

export default Navbar;