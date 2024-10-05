import Image from "next/image"
import thumbnail from "@/assets/thumbnail.jpg"
import Link from "next/link"

const ArticleCard = () => {
  return (
    <Link href="/">
    <article className="shadow-sm border-[1px] border-primary p-4 rounded-2xl">
        <Image src={thumbnail} className="rounded-xl h-48 object-cover" alt="thumbnail" />
        <h1 className="text-xl font-bold text-center mt-5 line-clamp-2">طريقة الحصول علي كود لأي موقع</h1>
        <p className="text-center my-4">
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
        </p>
    </article>
    </Link>
  )
}

export default ArticleCard