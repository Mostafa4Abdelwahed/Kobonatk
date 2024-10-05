import amazonLogo from "@/assets/amazon.png"
import Image from "next/image"
import ButtonCta from "../Ui/ButtonCta"

const CompanyCard = () => {
  return (
    <div className="border-2 border-primary p-5 transition-all hover:shadow-lg rounded-xl">
        <div className="header flex items-center gap-3">
            <Image src={amazonLogo} width={"50"} height={"50"} alt="Company Image" />
            <h1 className="text-xl">أمازون</h1>
        </div>
        <p className="text-xl mt-4 mb-4">أكثر من 120+ كود يوميا علي جميع المنتجات</p>
        <ButtonCta full>عرض الأكواد</ButtonCta>
    </div>
  )
}

export default CompanyCard