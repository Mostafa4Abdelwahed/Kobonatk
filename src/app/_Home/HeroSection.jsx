import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="flex flex-1 main_bg w-full flex-col items-center justify-center text-center px-4 sm:pt-18 py-16">
      <span
        className="border cursor-default rounded-2xl py-1 px-4 bg-white text-slate-500 text-sm mb-5 hover:shadow-sm transition duration-300 ease-in-out"
      >
        اكواد و عروض محدثة يوميا و باستمرار
      </span>
      <h1 className="mx-auto max-w-4xl pb-2 font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
        <span className="tagline_text leading-tight pb-2">
          عروض وخصومات علي جميع المنتجات و المتاجر
        </span>
      </h1>
      <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-700 leading-7">
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
        النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
        النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
      </p>
      <Link
        className="border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary rounded-xl font-bold text-lg px-14 py-4 sm:mt-10 mt-8 transition-all bg-primary text-white"
        href="/companies"
      >
        ابدء الاستكشاف
      </Link>
    </section>
  );
};

export default HeroSection;
