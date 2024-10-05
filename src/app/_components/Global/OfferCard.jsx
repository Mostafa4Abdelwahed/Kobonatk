import Image from "next/image"
import amazonLogo from "@/assets/amazon.png"

const OfferCard = () => {
  return (
    <div className="flex flex-col shadow-sm hover:shadow-md transition-all gap-2 bg-white py-5 px-5 rounded-xl">
        <header className="flex gap-3.5 bg-white text-primary rounded-xl pb-5">
        <Image src={amazonLogo} className="rounded-lg mx-auto" width={"55"} alt="company logo" />
        <span className="bg-primary/5 w-full text-center py-2.5 rounded-lg text-primary font-bold text-xl">خصم 50%</span>
        </header>
        <p className="text-xl mb-5">كود خصم سيفي 2024 اقوي كوبون خصم سيفي حتي 20% لكل المنتجات</p>
        <button className="w-full hover:bg-primary hover:text-white transition-all border-2 border-primary/50 text-primary rounded-lg py-2.5 text-center font-semibold text-xl">عرض الكوبون</button>
    </div>
  )
}

export default OfferCard