import Logo from "@/assets/logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white border-t-2">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex gap-3 items-center">
            <Image src={Logo} width={"35"} />
            <h1 className="font-bold text-3xl text-primary">كوبوناتك</h1>
          </div>

          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
          حقوق النشر والنسخ 2024. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
