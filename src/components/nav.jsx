import { useContext } from "react";
import { Outlet, useNavigate } from "react-router";
import { GlobalContext } from "../context/global-context";
import Button from "./button";
import Dropdown from "./dropdown";
import { Link } from "react-router-dom";
import Cart from "./cart";
import { CartContext } from "../context/cart-context";

const routes = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Shop", url: "/shop" },
];

const AppNav = () => {
  const navigate = useNavigate();
  const { toggleDropdown, auth, logout, dropdown } = useContext(GlobalContext);
  const { noOfCartItems } = useContext(CartContext);

  const goToLogin = () => {
    navigate("/login");
  };

  const handleLogin = () => {
    if (auth) {
      logout();
      goToLogin();
    } else {
      goToLogin();
    }
  };

  return (
    <div>
      <nav className="w-5/6 mx-auto flex justify-between py-4">
        <div className="logo">logo</div>
        <div className="menu flex gap-8">
          {routes.map((route, idx) => (
            <Link key={idx} to={route.url} className="hover:text-orange-400">
              {route.name}
            </Link>
          ))}
        </div>
        <div className="buttons flex items-center gap-x-8">
          <Button children={auth ? "logout" : "login"} onClick={handleLogin} />
          <div className="flex gap-4 items-center">
            <div>
              <Cart />
              {dropdown && <Dropdown />}
            </div>
            <Button children={noOfCartItems} onClick={toggleDropdown} />
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default AppNav;
