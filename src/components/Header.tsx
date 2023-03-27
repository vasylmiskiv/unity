import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { ReactComponent as CartWhiteIcon } from "../assets/cart-white.svg";
import { ReactComponent as CartDarkIcon } from "../assets/cart-dark.svg";
import { ReactComponent as ProfileDarkIcon } from "../assets/profile-dark.svg";
import { ReactComponent as BurgerMenu } from "../assets/burger-menu.svg";
import { ReactComponent as CloseMenu } from "../assets/close-menu.svg";
import { ReactComponent as ArrowDownWhite } from "../assets/arrow-down-white.svg";
import { ReactComponent as ArrowDownDark } from "../assets/arrow-down-dark.svg";
import profileWhite from "../assets/profile.svg";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [prevPath, setPrevPath] = useState("");

  const location = useLocation();

  useEffect(() => {
    if (prevPath !== location.pathname) {
      setIsOpenMenu(false);

      setPrevPath(location.pathname);
    }
  }, [location.pathname, prevPath]);

  return (
    <header>
      <div className="container mx-auto flex justify-between items-center py-7 max-sm:px-6">
        <a href="/" className="text-2xl font-bold font-inter max-sm:text-lg">
          Logo Here
        </a>
        {/* Desktop */}
        <nav className="max-sm:hidden">
          <ul className="flex items-center font-semibold font-roboto">
            <li className="ml-12">
              <NavLink to="/" className="opacity-70 hover:opacity-100">
                Home
              </NavLink>
            </li>
            <li className="ml-12">
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  `opacity-70 hover:opacity-100 flex items-center gap-1 ${
                    isActive && `opacity-100`
                  }`
                }
              >
                Features
                <ArrowDownDark />
              </NavLink>
            </li>
            <li className="ml-12">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `opacity-70 hover:opacity-100 flex items-center gap-1 ${
                    isActive && `opacity-100`
                  }`
                }
              >
                Blog
              </NavLink>
            </li>
            <li className="ml-12">
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `opacity-70 hover:opacity-100 flex items-center gap-1 ${
                    isActive && `opacity-100`
                  }`
                }
              >
                Shop
              </NavLink>
            </li>
            <li className="ml-12">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `opacity-70 hover:opacity-100 flex items-center gap-1 ${
                    isActive && `opacity-100`
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li className="ml-12">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `opacity-70 hover:opacity-100 flex items-center gap-1 ${
                    isActive && `opacity-100`
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="ml-14 flex gap-10">
              <NavLink
                to="/"
                className="py-[7px] px-[9px] border border-black rounded-full"
              >
                <ProfileDarkIcon />
              </NavLink>
              <NavLink
                to="/"
                className="py-[8px] px-[9px] border border-black rounded-full"
              >
                <CartDarkIcon />
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* Mobile */}
        <button
          className="hidden max-sm:block"
          onClick={() => setIsOpenMenu(true)}
        >
          <BurgerMenu />
        </button>
      </div>
      {isOpenMenu && (
        <div className="sm:hidden z-20 text-white bg-black absolute w-full top-0 py-7 px-6 rounded-b">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="font-extrabold font-inter text-lg">
              Logo Here
            </NavLink>
            <button onClick={() => setIsOpenMenu(false)}>
              <CloseMenu />
            </button>
          </div>
          <nav className="mt-10 pl-0 flex flex-col text-roboto text-sm gap-6 items-start px-2 pt-2 pb-3">
            <NavLink
              to="/"
              className={({ isActive }) => `${isActive && `font-bold`}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/features"
              className={({ isActive }) =>
                `flex items-center gap-1 ${isActive && `font-bold`}`
              }
            >
              Features <ArrowDownWhite />
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => `${isActive && `font-bold`}`}
            >
              Blog
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) => `${isActive && `font-bold`}`}
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `${isActive && `font-bold`}`}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `${isActive && `font-bold`}`}
            >
              Contact
            </NavLink>
          </nav>
          <div className="mt-14 flex justify-center gap-10">
            <a
              href="/"
              className="py-[7px] px-[9px] border border-white rounded-full"
            >
              <img src={profileWhite} alt="profile" />
            </a>
            <a
              href="/"
              className="py-[7px] px-[9px] border border-white rounded-full"
            >
              <CartWhiteIcon />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
function usEffect(arg0: () => void) {
  throw new Error("Function not implemented.");
}
