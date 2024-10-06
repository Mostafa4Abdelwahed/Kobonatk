"use client"
import { useState } from "react";
import OfferCard from "@/app/_components/Global/OfferCard";
import Pagination from "@/app/_components/Global/Pagination";
import Container from "@/app/_components/Ui/Container";
import Link from "next/link";

const offersDay = () => {
  const [page, setPage] = useState(1)
  return (
    <div>
      <header className="bg-primary text-white py-10 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">عروض اليوم</h1>
        <nav className="mt-7">
          <ol className="flex items-center gap-1 text-sm text-white">
            <li>
              <Link href="/" className="block transition hover:text-white/75">
                الرئيسية
              </Link>
            </li>

            <li className="rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>

            <li>
              <Link
                href="/offers-day"
                className="block transition hover:text-white/75"
              >
                عروض اليوم
              </Link>
            </li>
          </ol>
        </nav>
      </header>
      <main className="my-10">
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-10">
                <OfferCard />
                <OfferCard />
                <OfferCard />
                <OfferCard />
                <OfferCard />
                <OfferCard />
                <OfferCard />
                <OfferCard />
                <OfferCard />
                <OfferCard />
                <OfferCard />
                <OfferCard />
                <OfferCard />
                <OfferCard />
                <OfferCard />
                <OfferCard />
                <OfferCard />
                <OfferCard />
                <OfferCard />
                <OfferCard />
                <OfferCard />
            </div>
            <Pagination pageSetter={setPage} totalPages="100" />
        </Container>
      </main>
    </div>
  );
};

export default offersDay;
