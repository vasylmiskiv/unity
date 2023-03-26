import { ReactComponent as PhoneIcon } from "../assets/phone.svg";
import { ReactComponent as EnvelopIcon } from "../assets/envelop.svg";
import { ReactComponent as MarkerIcon } from "../assets/marker.svg";
import { ReactComponent as TwitterIcon } from "../assets/twitter.svg";
import { ReactComponent as InstagramIcon } from "../assets/instagram.svg";
import { ReactComponent as DiscordIcon } from "../assets/discord.svg";
import dicordIcon from "../assets/discord.svg";
import smallCircle from "../assets/small-ellipse.svg";
import bigCircle from "../assets/big-ellipse.svg";
import paperPlane from "../assets/paper-airplane.svg";

const Contact = () => {
  return (
    <div className="pt-20 font-poppins container mx-auto px-4">
      <h1 className="text-5xl font-bold">Contact Us</h1>
      <p className="text-xl text-silver mt-4 font-medium">
        Any question or remarks? Just write us a message!
      </p>
      <div className="flex mt-12 p-3 bg-white rounded-xl">
        <div className="relative w-2/5 bg-black text-white pt-11 px-10 pb-8 text-base text-left rounded-t-lg rounded-l-lg">
          <div className="text-[1.75rem] font-semibold">
            Contact Information
          </div>
          <div className="mt-3 text-lg text-contactInfoSilver">
            Say something to start a live chat!
          </div>
          <div className="mt-28 flex flex-col gap-12">
            <div className="flex items-center gap-6">
              <PhoneIcon />
              +1012 3456 789
            </div>
            <div className="flex items-center gap-6">
              <EnvelopIcon /> demo@gmail.com
            </div>
            <div className="flex gap-6 max-w-[330px]">
              <MarkerIcon className="w-10" /> 132 Dartmouth Street Boston,
              Massachusetts 02156 United States
            </div>
          </div>

          <div className="mt-48 flex items-center gap-5">
            <a
              href="/"
              className="hover:bg-white p-2 rounded-full bg-defaultIconsBg"
            >
              <p className="text-white hover:text-black">123</p>
            </a>
            <a
              href="/"
              className="hover:bg-white p-2 rounded-full bg-defaultIconsBg"
            >
              <p className="text-white hover:text-black h-full w-full">123</p>
            </a>
            <a
              href="/"
              className="hover:bg-white p-2 rounded-full bg-defaultIconsBg"
            >
              <p className="text-white hover:text-black">123</p>
            </a>
          </div>
          <div className="absolute bottom-0 right-0">
            <img src={bigCircle} alt="big-circle" className="h-[216px]" />
          </div>
          <div className="absolute right-20 bottom-28">
            <img src={smallCircle} alt="small-circle" />
          </div>
        </div>
        <div className="w-3/5 bg-white px-14 pt-12 pb-40">
          <form>
            <div className="flex justify-between gap-14">
              <div className="w-1/2 font-medium">
                <label
                  className="block text-formInputDefault text-xs text-left"
                  htmlFor="first-name"
                >
                  First Name
                </label>
                <input
                  className="border-b border-formInputDefault w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none"
                  id="first-name"
                  type="text"
                />
              </div>
              <div className="w-1/2 font-medium">
                <div>
                  <label
                    className="block text-formInputDefault text-xs text-left"
                    htmlFor="last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="border-b border-formInputDefault w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none"
                    id="last-name"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-between gap-14">
              <div className="w-1/2 font-medium">
                <label
                  className="block text-formInputDefault text-xs text-left"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="border-b border-formInputDefault w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none"
                  id="email"
                  type="email"
                />
              </div>
              <div className="w-1/2 font-medium">
                <label
                  className="block text-formInputDefault text-xs text-left"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  className="border-b border-formInputDefault w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none"
                  id="phone"
                  type="tel"
                />
              </div>
            </div>
            <div className="mt-12">
              <label className="block font-semibold text-left">
                Select subject?
              </label>
              <div className="flex mt-4 gap-6 text-xs">
                <label className="inline-flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="form-checkbox text-gray-600"
                    name="inquiry[]"
                    value="General Inquiry"
                  />
                  <span>General Inquiry</span>
                </label>
                <label className="inline-flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600"
                    name="inquiry[]"
                    value="Technical Support"
                  />
                  <span>General Inquiry</span>
                </label>
                <label className="inline-flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600"
                    name="inquiry[]"
                    value="Billing"
                  />
                  <span>General Inquiry</span>
                </label>
                <label className="inline-flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600"
                    name="inquiry[]"
                    value="Billing"
                  />
                  <span>General Inquiry</span>
                </label>
              </div>
            </div>
            <div className="mt-12 font-medium">
              <label
                className="block text-formInputDefault text-xs text-left"
                htmlFor="phone"
              >
                Message
              </label>
              <input
                placeholder="Write your message.."
                className="border-b border-formInputDefault w-full py-3 text-sm font-medium leading-tight focus:outline-none resize-none"
              ></input>
            </div>
            <div className="flex justify-end mt-12">
              <button className="py-4 px-14 bg-black text-white rounded">
                Send Message
              </button>
            </div>
            <div className="relative flex justify-center">
              <img src={paperPlane} alt="paper-plane" className="absolute" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
