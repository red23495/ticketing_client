import Link from "next/link";

const Header = ({ currentUser }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand mx-3">GitTix</a>
      </Link>
      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">
          <li className="nav-item">
            {!currentUser && (
              <Link href="signin">
                <a className="nav-link">Sign In</a>
              </Link>
            )}
          </li>
          <li className="nav-item">
            {!currentUser && (
              <Link href="signup">
                <a className="nav-link">Sign Up</a>
              </Link>
            )}
          </li>
          <li className="nav-item">
            {currentUser && (
              <Link href="signout">
                <a className="nav-link">Sign Out</a>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
