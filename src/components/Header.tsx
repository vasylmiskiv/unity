import { useState } from "react";

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
              <a href="/" className="opacity-70 hover:opacity-100">
                Home
              </a>
            </li>
            <li className="ml-12">
              <a
                href="/features"
                className="opacity-70 hover:opacity-100 flex items-center gap-1"
              >
                Features
                <ArrowDownDark />
              </a>
            </li>
            <li className="ml-12">
              <a href="/blog" className="opacity-70 hover:opacity-100">
                Blog
              </a>
            </li>
            <li className="ml-12">
              <a href="/shop" className="opacity-70 hover:opacity-100">
                Shop
              </a>
            </li>
            <li className="ml-12">
              <a href="/about" className="opacity-70 hover:opacity-100">
                About
              </a>
            </li>
            <li className="ml-12">
              <a href="/contact" className="opacity-70 hover:opacity-100">
                Contact
              </a>
            </li>
            <li className="ml-14 flex gap-10">
              <a
                href="http://localhost:3000"
                className="py-[7px] px-[9px] border border-black rounded-full"
              >
                <ProfileDarkIcon />
              </a>
              <a
                href="http://localhost:3000"
                className="py-[8px] px-[9px] border border-black rounded-full"
              >
                <CartDarkIcon />
              </a>
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
            <a href="/" className="font-extrabold font-inter text-lg">
              Logo Here
            </a>
            <button onClick={() => setIsOpenMenu(false)}>
              <CloseMenu />
            </button>
          </div>
          <nav className="mt-10 pl-0 flex flex-col text-roboto text-sm gap-6 items-start px-2 pt-2 pb-3">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="/" className="hover:underline flex items-center gap-1">
              Features <ArrowDownWhite />
            </a>
            <a href="/" className="hover:underline">
              Blog
            </a>
            <a href="/" className="hover:underline">
              About
            </a>
            <a href="/" className="hover:underline">
              Contact
            </a>
          </nav>
          <div className="mt-14 flex justify-center gap-10">
            <a
              href="/"
              className="py-[7px] px-[9px] border border-white rounded-full"
            >
              <img src={profileWhite} alt="profile" />
            </a>
            <a
              href="http://localhost:3000"
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
