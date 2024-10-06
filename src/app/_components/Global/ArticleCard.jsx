import Image from "next/image";
import thumbnail from "@/assets/thumbnail.jpg";
import Link from "next/link";

const ArticleCard = () => {
  return (
    <article className="bg-white border-[1px] border-gray-50 py-3 px-4 shadow-sm rounded-2xl">
      <Image
        src={thumbnail}
        className="rounded-xl h-48 object-cover"
        alt="thumbnail"
      />
      <span className="flex items-center gap-2 mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.3em"
          height="1.3em"
          viewBox="0 0 24 24"
        >
          <g fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z" />
            <path stroke-linecap="round" d="M7 4V2.5M17 4V2.5" />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m9 14.5l1.5-1.5v4"
            />
            <path
              stroke-linecap="round"
              d="M13 16v-2a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0ZM2.5 9h19"
            />
          </g>
        </svg>
        <span>29/10/2025</span>
      </span>
      <h1 className="font-bold text-2xl my-2">طريقة استخدام الموقع</h1>
      <Link href="/blog/3" className="text-center hover:bg-primary hover:text-white transition-all bg-primary/20 font-bold text-xl rounded-lg py-2 mt-5 w-full block text-primary">
        عرض المقال
      </Link>
    </article>
  );
};

export default ArticleCard;
