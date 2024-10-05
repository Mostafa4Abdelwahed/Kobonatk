"use client"
import Logo from "@/assets/logo.svg";
import Image from "next/image";
import Container from "../Ui/Container";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <div className="bg-white relative border-b-gray-50 border-[1px] py-6">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex gap-3 items-center">
            <Image src={Logo} width={"35"} />
            <h1 className="font-bold text-3xl text-primary">كوبوناتك</h1>
          </Link>

          {/* Links */}
          <div className="flex">
            <nav className="hidden md:block">
              <ul className="flex items-center gap-8 text-sm">
                <li>
                  <Link
                    className="text-gray-500 text-lg transition hover:text-primary/75"
                    href="/"
                  >
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 text-lg transition hover:text-primary"
                    href="/companies"
                  >
                    جميع المتاجر
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 text-lg transition hover:text-primary"
                    href="/offers-day"
                  >
                    عروض اليوم
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 text-lg transition hover:text-primary"
                    href="/blog"
                  >
                    المدونة
                  </Link>
                </li>
              </ul>
            </nav>

            <nav className={`md:hidden absolute transition-all py-7 bg-white top-full border-b-4 border-primary block duration-500 left-0 right-0 ${show ? "opacity-100" : "opacity-0 -right-full"} `}>
              <ul className="flex flex-col items-start pr-10 gap-8 text-sm">
                <li>
                  <Link
                    className="text-gray-500 text-lg transition hover:text-primary/75"
                    href="/"
                  >
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 text-lg transition hover:text-primary"
                    href="/companies"
                  >
                    جميع المتاجر
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 text-lg transition hover:text-primary"
                    href="/offers-day"
                  >
                    عروض اليوم
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 text-lg transition hover:text-primary"
                    href="/blog"
                  >
                    المدونة
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Burger Button */}
          <button onClick={()=>{setShow(!show)}} className="block rounded border-[1px] border-primary p-2.5 text-primary transition hover:text-primary/75 md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
