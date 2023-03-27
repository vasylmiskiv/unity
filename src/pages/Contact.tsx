import { ReactComponent as PhoneIcon } from "../assets/phone.svg";
import { ReactComponent as EnvelopIcon } from "../assets/envelop.svg";
import { ReactComponent as MarkerIcon } from "../assets/marker.svg";
import { ReactComponent as TwitterIcon } from "../assets/twitter.svg";
import { ReactComponent as InstagramIcon } from "../assets/instagram.svg";
import { ReactComponent as DiscordIcon } from "../assets/discord.svg";
import dicordIcon from "../assets/discord.svg";
import instaIcon from "../assets/instagram.svg";
import twitterIcon from "../assets/twitter.svg";
import smallCircle from "../assets/small-ellipse.svg";
import bigCircle from "../assets/big-ellipse.svg";
import paperPlane from "../assets/paper-airplane.svg";
import { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subjet, setSubjet] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="pt-20 pb-12 font-poppins container mx-auto px-4">
      <h1 className="text-5xl font-bold max-sm:text-2xl">Contact Us</h1>
      <p className="text-xl text-silver mt-4 font-medium max-sm:text-sm max-sm:w-[200px] max-sm:m-auto max-sm:mt-4">
        Any question or remarks? Just write us a message!
      </p>
      <div className="relative flex mt-12 p-3 bg-white rounded-xl max-sm:mt-7 max-sm:flex-col max-sm:p-1">
        <div className="relative w-2/5 bg-black text-white pt-11 px-10 text-base text-left rounded-t-lg rounded-l-lg max-sm:w-full max-sm:pb-7">
          <div className="text-[1.75rem] font-semibold max-sm:text-center max-sm:text-[1.3rem]">
            Contact Information
          </div>
          <div className="mt-3 text-lg text-contactInfoSilver max-sm:text-xs max-sm:text-center">
            Say something to start a live chat!
          </div>
          <div className="mt-28 flex flex-col gap-12 max-sm:mt-6 max-sm:gap-6">
            <div className="flex items-center gap-6 max-sm:flex-col">
              <PhoneIcon />
              <p className="max-sm:text-sm text-center">+1012 3456 789</p>
            </div>
            <div className="flex items-center gap-6 max-sm:flex-col">
              <EnvelopIcon />
              <p className="max-sm:text-sm text-center">demo@gmail.com</p>
            </div>
            <div className="flex items-center gap-6 max-w-[330px] max-sm:flex-col">
              <MarkerIcon className="w-10" />
              <p className="max-sm:text-sm max-sm:text-center">
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </p>
            </div>
          </div>
          <div className="mt-48 flex items-center gap-5 max-sm:mt-16 max-sm:mx-auto max-sm:justify-center">
            <a
              href="/"
              className="z-10 hover:bg-white px-[12px] py-[14px] rounded-full bg-defaultIconsBg"
            >
              <img src={twitterIcon} alt="twitter" />
            </a>
            <a
              href="/"
              className="z-10 hover:bg-white px-[12px] py-[14px] rounded-full bg-defaultIconsBg"
            >
              <img src={instaIcon} alt="instagram" />
            </a>
            <a
              href="/"
              className="z-10 hover:bg-white px-[12px] py-[14px] rounded-full bg-defaultIconsBg"
            >
              <DiscordIcon />
            </a>
          </div>
          <img
            src={bigCircle}
            alt="big-circle"
            className="absolute bottom-0 right-0 h-[216px] pointer-events-none max-sm:h-[87px]"
          />
          <img
            src={smallCircle}
            alt="small-circle"
            className="absolute right-20 bottom-24 pointer-events-none max-sm:w-[70px] max-sm:right-[28px] max-sm:bottom-[60px]"
          />
        </div>
        <div className="w-3/5 bg-white px-14 pt-12 pb-36 max-sm:w-full max-sm:px-5 max-sm:pt-9 max-sm:pb-20">
          <form>
            <div className="flex justify-between gap-14 text-formInputDefault max-sm:flex-col max-sm:gap-7">
              <div className="w-1/2 font-medium max-sm:w-full">
                <label
                  className={`block text-sm text-left ${
                    firstName.length && `text-black font-semibold`
                  }`}
                  htmlFor="first-name"
                >
                  First Name
                </label>
                <input
                  className={`border-b border-formInputDefault w-full py-2 leading-tight outline-none focus:text-black focus:border-black hover:border-black hover:text-black`}
                  id="first-name"
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="w-1/2 font-medium max-sm:w-full">
                <div>
                  <label
                    className={`block text-sm text-left ${
                      lastName.length && `text-black font-semibold`
                    }`}
                    htmlFor="last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className={`border-b border-formInputDefault w-full py-2 leading-tight outline-none focus:text-black focus:border-black hover:border-black hover:text-black`}
                    id="last-name"
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-between gap-14 text-formInputDefault max-sm:flex-col max-sm:mt-7 max-sm:gap-7">
              <div className="w-1/2 font-medium max-sm:w-full">
                <label
                  className={`block text-sm text-left ${
                    email.length && `text-black font-semibold`
                  }`}
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className={`border-b border-formInputDefault w-full py-2 leading-tight outline-none focus:text-black focus:border-black hover:border-black hover:text-black`}
                  id="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-1/2 font-medium max-sm:w-full">
                <label
                  className={`block text-sm text-left ${
                    phone.length && `text-black font-semibold`
                  }`}
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  className={`border-b border-formInputDefault w-full py-2 leading-tight outline-none focus:text-black focus:border-black hover:border-black hover:text-black`}
                  id="phone"
                  type="tel"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-12 max-sm:mt-7">
              <label className="block font-semibold text-left">
                Select Subject?
              </label>
              <div className="flex mt-4 gap-6 text-sm max-sm:flex-col">
                <div className="flex gap-6">
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
                </div>
                <div className="flex gap-6">
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
            </div>
            <div className="mt-12 font-medium max-sm:mt-7">
              <label
                className={`block  text-sm text-left ${
                  message.length
                    ? `text-black font-semibold`
                    : `text-formInputDefault`
                }`}
                htmlFor="phone"
              >
                Message
              </label>
              <input
                placeholder="Write your message.."
                className="border-b border-formInputDefault text-formInputDefault w-full py-3 text-sm font-medium leading-tight focus:outline-none resize-none focus:text-black focus:border-black hover:border-black hover:text-black"
                onChange={(e) => setMessage(e.target.value)}
              ></input>
            </div>
            <div className="flex justify-end mt-12 max-sm:mt-7">
              <button className="py-4 px-14 z-10 bg-black text-white rounded max-sm:py-3 max-sm:flex-grow max-sm:w-full max-sm:text-sm">
                Send Message
              </button>
            </div>
            <div className="flex justify-center absolute right-40 bottom-[-40px] select-none max-sm:bottom-[-24px] max-sm:w-40 max-sm:right-[168px]">
              <img
                src={paperPlane}
                alt="paper-plane"
                className="select-none pointer-events-none"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
