const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex justify-between items-center py-4">
        <a href="/" className="text-2xl font-bold">
          Logo Here
        </a>
        <nav>
          <ul className="flex">
            <li className="ml-6">
              <a href="/" className="opacity-70 hover:opacity-100">
                Home
              </a>
            </li>
            <li className="ml-6">
              <a href="/features" className="opacity-70 hover:opacity-100">
                Features
              </a>
            </li>
            <li className="ml-6">
              <a href="/blog" className="opacity-70 hover:opacity-100">
                Blog
              </a>
            </li>
            <li className="ml-6">
              <a href="/shop" className="opacity-70 hover:opacity-100">
                Shop
              </a>
            </li>
            <li className="ml-6">
              <a href="/about" className="opacity-70 hover:opacity-100">
                About
              </a>
            </li>
            <li className="ml-6">
              <a href="/contact" className="opacity-70 hover:opacity-100">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
