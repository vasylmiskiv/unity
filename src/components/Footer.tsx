import { ReactComponent as PhoneIcon } from "../assets/phone.svg";
import { ReactComponent as EnvelopIcon } from "../assets/envelop.svg";
import { ReactComponent as MarkerIcon } from "../assets/marker.svg";

const Footer = () => {
  return (
    <div className="bg-black pt-24 pb-20 max-sm:pt-10">
      <div className="container mx-auto px-6">
        <h2 className="text-white text-4xl font-extrabold font-inter">
          Logo Here
        </h2>
        <div className="mt-12 pt-5 pl-5 flex justify-between border-t border-white text-white font-poppins text-left max-sm:mt-7 max-sm:flex-wrap max-sm:pl-0">
          <div className="max-sm:mt-4">
            <div className="font-semibold text-base">Reach us</div>
            <div className="mt-6 flex flex-col gap-6 max-sm:text-sm">
              <div className="flex items-center gap-6 max-sm:flex-col max-sm:items-start">
                <PhoneIcon />
                <a href="tel:+1-012-3456-789" className="hover:underline">
                  +1012 3456 789
                </a>
              </div>
              <div className="flex items-center gap-6 max-sm:flex-col max-sm:items-start">
                <EnvelopIcon />
                <a href="mailto:demo@gmail.com" className="hover:underline">
                  demo@gmail.com
                </a>
              </div>
              <div className="flex gap-6 max-w-[330px] max-sm:flex-col max-sm:items-start max-sm:max-w-[180px]">
                <MarkerIcon className="h-6 w-6" />
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

          <div className="max-sm:mt-4 max-sm:w-[116px]">
            <div className="font-semibold text-base">Company</div>
            <div className="mt-6 flex flex-col gap-6 max-sm:text-sm">
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
          </div>

          <div className="max-sm:mt-6">
            <div className="mt-3 font-semibold text-base">Legal</div>
            <div className="mt-6 flex flex-col gap-6 max-sm:text-sm">
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
          </div>

          <div className="max-sm:mt-6">
            <div className="mt-3 font-semibold text-base">Quick Links</div>
            <div className="mt-6 flex flex-col gap-6 max-sm:text-sm">
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

          <div className="flex flex-col max-w-[390px] max-sm:mt-12 max-sm:flex-1">
            <div className="p-3 pb-5 bg-footerSubBox rounded-lg max-sm:max-w-full max-sm:pt-5 max-sm:pr-7">
              <div className="font-semibold text-base">Join Our Newsletter</div>
              <form className="mt-6 flex">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="py-3 px-2 bg-footerSubBoxInput text-xs rounded-l placeholder-footerSubBoxInputText outline-none max-sm:flex-1"
                />
                <button
                  type="submit"
                  className="bg-black py-3 px-5 font-medium text-sm rounded-r cursor-pointer max-sm:px-6"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-5 text-xs max-w-[250px] text-silver max-sm:text-sm max-sm:max-w-[300px]">
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
