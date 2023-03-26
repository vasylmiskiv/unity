import { ReactComponent as PhoneIcon } from "../assets/phone.svg";
import { ReactComponent as EnvelopIcon } from "../assets/envelop.svg";
import { ReactComponent as MarkerIcon } from "../assets/marker.svg";

const Footer = () => {
  return (
    <div className="bg-black pt-24 pb-20">
      <div className="container mx-auto">
        <h2 className="text-white text-4xl font-extrabold font-inter">
          Logo Here
        </h2>
        <div className="mt-12 pt-5 pl-5 flex justify-between border-t border-white text-white font-poppins text-left">
          <div>
            <div className="mt-2 font-semibold text-lg">Reach us</div>
            <div className="mt-6 flex flex-col gap-6">
              <div className="flex items-center gap-6">
                <PhoneIcon />
                <a href="tel:+1-012-3456-789" className="hover:underline">
                  +1012 3456 789
                </a>
              </div>
              <div className="flex items-center gap-6">
                <EnvelopIcon />{" "}
                <a href="mailto:demo@gmail.com" className="hover:underline">
                  demo@gmail.com
                </a>
              </div>
              <div className="flex gap-6 max-w-[330px]">
                <MarkerIcon className="w-10" />
                <a
                  href="http://maps.google.com/?q= 132 Dartmouth Street Boston,
                Massachusetts 02156 United States"
                  className="hover:underline"
                >
                  132 Dartmouth Street Boston, Massachusetts 02156 United States
                </a>
              </div>
            </div>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-6">
              <div className="mt-3 font-semibold text-lg">Company</div>
              <a href="/" className="hover:underline">
                About
              </a>
              <a href="/" className="hover:underline">
                Contact
              </a>
              <a href="/" className="hover:underline">
                Blogs
              </a>
            </div>

            <div className="flex flex-col gap-6">
              <div className="mt-3 font-semibold text-lg">Legal</div>
              <a href="/" className="hover:underline">
                Privacy Policy
              </a>
              <a href="/" className="hover:underline">
                Terms & Services
              </a>
              <a href="/" className="hover:underline">
                Terms of Use
              </a>
              <a href="/" className="hover:underline">
                Refund Policy
              </a>
            </div>

            <div className="flex flex-col gap-6">
              <div className="mt-3 font-semibold text-lg">Quick Links</div>
              <a href="/" className="hover:underline">
                Techlabz Keybox
              </a>
              <a href="/" className="hover:underline">
                Downloads
              </a>
              <a href="/" className="hover:underline">
                Forum
              </a>
            </div>
          </div>

          <div className="flex flex-col max-w-[300px]">
            <div className="p-3 pb-5 bg-footerSubBox rounded-lg">
              <div className="font-semibold text-lg">Join Our Newsletter</div>
              <form className="mt-6 smt-auto">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="py-3 px-2 bg-footerSubBoxInput text-xs rounded-l placeholder-footerSubBoxInputText outline-none"
                />
                <button
                  type="submit"
                  className="bg-black py-3 px-5 font-medium text-xs rounded-r cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
              <div></div>
              <p className="mt-5 text-xs max-w-[250px] text-silver">
                * Will send you weekly updates for your better tool management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
