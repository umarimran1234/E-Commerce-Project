"use client";

import Link from "next/link";
import {
  Home,
  LayoutList,
  Heart,
  ShoppingBag,
  Globe,
  Headphones,
  Building2,
  User,
} from "lucide-react";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  divider?: boolean;
}

const NavItem = ({ href, icon, label, divider }: NavItemProps) => (
  <>
    <Link
      href={href}
      className="flex items-center gap-3 px-6 py-3 text-md text-gray-900 hover:bg-gray-100 transition-colors"
    >
      {icon}
      <span> {label} </span>
    </Link>
    {divider && <div className="h-px bg-gray-200 mx-6 my-2" />}
  </>
);

export default function HamBurgerMenu({
  menuOpen,
  closeMenu,
}: {
  menuOpen: boolean;
  closeMenu: () => void;
}) {
  return (
    <div
      onClick={closeMenu}
      className={`fixed top-0 left-0 w-72 h-full bg-white border-r transition-transform duration-300 z-50 ${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* User Profile Section */}
      <div className="p-4 flex flex-col items-center gap-4 border-b bg-gray-100 border-gray-200">
        <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
          <User className="w-8 h-8 text-gray-500" />
        </div>
        <div className="flex gap-x-2 text-md">
          <Link
            href="/signin"
            onClick={closeMenu}
            className="text-gray-900 hover:underline"
          >
            Sign in
          </Link>
          {" | "}
          <Link
            href="/register"
            onClick={closeMenu}
            className="text-gray-900 hover:underline"
          >
            Register
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1">
        <NavItem
          href="/"
          icon={<Home color={"gray"} className="w-5 h-5" />}
          label="Home"
        />
        <NavItem
          href="/second-page"
          icon={<LayoutList color={'gray'} className="w-5 h-5" />}
          label="Categories"
        />
        <NavItem
          href="/favorites"
          icon={<Heart color={"gray"} className="w-5 h-5" />}
          label="Favorites"
        />
        <NavItem
          href="/fourth-page"
          icon={<ShoppingBag color={'gray'} className="w-5 h-5" />}
          label="My orders"
          divider
        />

        {/* Settings & Support */}
        <NavItem
          href="/language"
          icon={<Globe color={"gray"} className="w-5 h-5" />}
          label="English | USD"
        />
        <NavItem
          href="/contact"
          icon={<Headphones color={"gray"} className="w-5 h-5" />}
          label="Contact us"
        />
        <NavItem
          href="/about"
          icon={<Building2 color={"gray"} className="w-5 h-5" />}
          label="About"
          divider
        />
      </nav>

      {/* Footer Links */}
      <div className="p-4 flex flex-col ml-5 gap-y-2 text-md border-b border-gray-200">
        <Link
          href="/agreement"
          onClick={closeMenu}
          className="block text-gray-600 hover:text-gray-900"
        >
          User agreement
        </Link>
        <Link
          href="/partnership"
          onClick={closeMenu}
          className="block text-gray-600 hover:text-gray-900"
        >
          Partnership
        </Link>
        <Link
          href="/privacy"
          onClick={closeMenu}
          className="block mb-4 text-gray-600 hover:text-gray-900"
        >
          Privacy policy
        </Link>
      </div>
    </div>
  );
}
