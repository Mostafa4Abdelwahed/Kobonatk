"use client";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Image from "next/image";
import amazonLogo from "@/assets/amazon.png";

const OfferCard = () => {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("TO55C");
  const [copiled, setCopiled] = useState(false);
  
  const handleCopy = ()=>{
    navigator.clipboard.writeText(code);
    setCopiled(true)
    setTimeout(()=>{
      setCopiled(false);
    },2000)
  }
  return (
    <>
      <div className="flex flex-col shadow-sm hover:shadow-md transition-all gap-2 bg-white py-5 px-5 rounded-xl">
        <header className="flex gap-3.5 bg-white text-primary rounded-xl pb-5">
          <Image
            src={amazonLogo}
            className="rounded-lg mx-auto"
            width={"55"}
            alt="company logo"
          />
          <span className="bg-primary/5 w-full text-center py-2.5 rounded-lg text-primary font-bold text-xl">
            خصم 50%
          </span>
        </header>
        <p className="text-xl mb-5">
          كود خصم سيفي 2024 اقوي كوبون خصم سيفي حتي 20% لكل المنتجات
        </p>
        <button
          onClick={() => {
            setOpen(true);
          }}
          className="w-full hover:bg-primary hover:text-white transition-all border-2 border-primary/50 text-primary rounded-lg py-2.5 text-center font-semibold text-xl"
        >
          عرض الكوبون
        </button>
      </div>

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/60 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen">
          <div className="flex min-h-0 md:min-h-full justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-sm transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Image src={amazonLogo} className="mx-auto pb-2.5" width="55" alt="company logo" />
                    <DialogTitle
                      as="h1"
                      className="text-base border-t-2 pt-2.5 text-center mt-2.5 font-semibold leading-6 text-gray-900"
                    >
                      كود خصم نون مصر بقيمة 10% إضافي على كل المتجر
                    </DialogTitle>
                  <div className="my-4">
                    <div className="flex flex-col md:flex-row gap-2.5">
                      <input value={code} disabled className="bg-gray-200 w-full py-2 text-center rounded-md" />
                      <button onClick={handleCopy} className="bg-primary text-white rounded-md w-auto inline-flex py-2 px-8">
                      {copiled ? "تم النسخ" : "نسخ"}
                      </button>
                    </div>
                    <p className="mt-4 text-center">
                    اذهب الى 
                    <a className="text-primary" href="/"> Amazon.com </a> وقم بالصاق رمز الكوبون في سلة المشتريات للحصول على الخصم
                    </p>
                    <button className="bg-primary w-full text-lg mt-4 text-white rounded-md py-3 px-8">اذهب الي امازون</button>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default OfferCard;
