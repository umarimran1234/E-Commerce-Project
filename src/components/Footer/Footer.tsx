import Image from "next/image";
import Link from "next/link";
import { AiFillTwitterCircle } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaAngleUp,
} from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="py-12">
      {/* Main Footer Section */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-8 mb-8">
          {/* First Section - About Us */}
          <div className="col-span-2">
            <Link
              href="/"
              className="flex text-[#8CB7F5] text-xl font-bold gap-2 items-center"
            >
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.125 2H38.875C42.81 2 46 5.52576 46 9.875V36.125C46 40.4742 42.81 44 38.875 44H15.125C11.19 44 8 40.4742 8 36.125L8 9.875C8 5.52576 11.19 2 15.125 2Z"
                  fill="#0D6EFD"
                  fillOpacity="0.2"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.5 2H33.5C37.6421 2 41 5.52576 41 9.875V36.125C41 40.4742 37.6421 44 33.5 44H8.5C4.35786 44 0.999999 40.4742 1 36.125L1 9.875C1 5.52576 4.35786 2 8.5 2Z"
                  fill="#0D6EFD"
                />
                <g opacity="0.7">
                  <path
                    opacity="0.3"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.9848 19.1907H14.9597C14.9069 19.1907 14.8285 19.2642 14.8255 19.3127L14.0703 31.5181L28.1797 31.5154L27.417 19.3127C27.4141 19.266 27.3338 19.1907 27.2828 19.1907H26.2577V21.2452C26.2577 21.8126 25.7977 22.2725 25.2304 22.2725C24.663 22.2725 24.2031 21.8126 24.2031 21.2452V19.1907H18.0394V21.2452C18.0394 21.8126 17.5795 22.2725 17.0121 22.2725C16.4447 22.2725 15.9848 21.8126 15.9848 21.2452V19.1907Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.1216 12C23.9569 12 26.258 14.3014 26.258 17.134L27.2831 17.1364C28.4191 17.1364 29.3973 18.0554 29.4679 19.1849L30.2392 31.5246C30.3099 32.6559 29.4502 33.573 28.3177 33.573H13.9256C12.7936 33.573 11.9335 32.6541 12.0041 31.5246L12.7753 19.1849C12.846 18.0536 13.8222 17.1364 14.9601 17.1364H15.9852C15.9852 14.2999 18.2882 12 21.1216 12ZM24.2035 17.1365C24.2035 15.4362 22.8222 14.0547 21.1216 14.0547C19.4222 14.0547 18.0397 15.4353 18.0397 17.1341L24.2035 17.1365ZM15.9852 19.1909H14.9601C14.9072 19.1909 14.8289 19.2644 14.8259 19.313L14.0707 31.5184L28.18 31.5157L27.4174 19.313C27.4144 19.2663 27.3341 19.1909 27.2831 19.1909H26.258V21.2455C26.258 21.8129 25.7981 22.2728 25.2308 22.2728C24.6634 22.2728 24.2035 21.8129 24.2035 21.2455V19.1909H18.0397V21.2455C18.0397 21.8129 17.5798 22.2728 17.0125 22.2728C16.4451 22.2728 15.9852 21.8129 15.9852 21.2455V19.1909Z"
                    fill="white"
                  />
                </g>
              </svg>
              {/* Brand Logo */}
              Brand
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Best information about the company gies here but now lorem ipsum
              is.
            </p>
            <div className="flex gap-2 mt-2">
              <FaFacebook className="text-2xl text-gray-400" />
              <AiFillTwitterCircle className="text-2xl text-gray-400" />
              <TiSocialLinkedinCircular className="text-2xl text-gray-400" />
              <FaInstagram className="text-2xl text-gray-400" />
              <FaYoutube className="text-2xl text-gray-400" />
            </div>
          </div>

          {/* List Section 1 - Services */}
          <div>
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Find Store
                </a>
              </li>
              <li>
                <a href="/second-page" className="text-gray-400 hover:text-white">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* List Section 2 - Resources */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Partnership</h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Find Store
                </a>
              </li>
              <li>
                <a href="/second-page" className="text-gray-400 hover:text-white">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* List Section 3 - Support */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Information</h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Money Refund
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* List Section 4 - Legal */}
          <div>
            <h2 className="text-xl font-semibold mb-4">For users</h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Register
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Settings
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  My Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Last Section - Available Here */}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold mb-4">Get App</h2>
            <div className="flex gap-2 flex-col-reverse">
              <Link href="/" className="text-3xl text-gray-400">
                <Image
                  src="/images/PlayStore.jpg"
                  className="rounded-lg"
                  alt="Play Store"
                  width={124}
                  height={42}
                ></Image>
              </Link>
              <Link href="/" className="text-3xl text-gray-400">
                <Image
                  src="/images/AppStore.jpg"
                  className="rounded-lg"
                  alt="Play Store"
                  width={124}
                  height={42}
                ></Image>
              </Link>
            </div>
          </div>
        </div>

        {/* Lower Footer Section */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Ecommerce</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Image
              src="/images/USA.png"
              alt="Play Store"
              className="h-[15px]"
              width={20}
              height={15}
            ></Image>
            <span>English</span>
            <FaAngleUp className="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
