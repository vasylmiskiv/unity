import { ReactComponent as CartIcon } from "../assets/cart.svg";
import { ReactComponent as UserIcon } from "../assets/profile.svg";
const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex justify-between items-center py-6">
        <a href="/" className="text-2xl font-bold font-inter">
          Logo Here
        </a>
        <nav>
          <ul className="flex items-center font-semibold font-roboto">
            <li className="ml-12">
              <a href="/" className="opacity-70 hover:opacity-100">
                Home
              </a>
            </li>
            <li className="ml-12">
              <a href="/features" className="opacity-70 hover:opacity-100">
                Features
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
                <UserIcon />
              </a>
              <a
                href="http://localhost:3000"
                className="py-[8px] px-[9px] border border-black rounded-full"
              >
                <CartIcon />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
