import { useAuth } from "../../Context/AuthContext";
import { Link, useLocation } from "react-router";

interface HeaderProps {
  onSignInClick?: () => void;
}

const Header = ({ onSignInClick }: HeaderProps) => {
  const { isAuthenticated, signOut } = useAuth();
  const { pathname } = useLocation();
  const isAuthRoute = pathname === "/signin" || pathname === "/signup";

  return (
    <div className="flex justify-between m-6 p-6">
      <img src="" alt="logo" />
      {isAuthRoute ? (
        <Link
          to="/"
          className="text-blue-500 hover:text-blue-600 cursor-pointer"
        >
          Back to home
        </Link>
      ) : isAuthenticated ? (
        <button
          onClick={signOut}
          className="text-blue-500 hover:text-blue-600 cursor-pointer"
        >
          Logout
        </button>
      ) : onSignInClick ? (
        <button
          onClick={onSignInClick}
          className="text-blue-500 hover:text-blue-600 cursor-pointer"
        >
          Login
        </button>
      ) : (
        <Link
          to="/signin"
          className="text-blue-500 hover:text-blue-600 cursor-pointer"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default Header;
