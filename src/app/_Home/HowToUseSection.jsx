import Step1 from "@/assets/Steps/step-1.png";
import Step2 from "@/assets/Steps/step-2.png";
import Step3 from "@/assets/Steps/step-3.png";
import Container from "../_components/Ui/Container";
import Image from "next/image";
import StepCard from "../_components/Home/StepCard";

const HowToUseSection = () => {
  return (
    <div className="bg-white py-14">
      <Container>
        <h1 className="text-4xl md:text-5xl font-bold mb-12">
          طريقة استخدام <span className="text-primary">الاكواد</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <StepCard image={Step1} title="كيفية ادخال الكوبون بشكل صحيح">
            تأكد من كتابة أو لصق رمز الكوبون بشكل صحيح. معظم الرموز تكون بالأحرف
            الكبيرة باللغة الإنجليزية (Capital Letters)، وبعضها حساسة لحالة
            الأحرف، وبالتالي قد لا تعمل إذا قمت بإدخالها في أحرف صغيرة. إذا قمت
            بنسخ كود الخصم من موقع الكوبون ولصقها، فتأكد من عدم وجود مسافات
            فارغة قبل أو بعد ذلك والذي قد يؤدي إلى ظهور رسالة خطأ.
          </StepCard>

          <StepCard image={Step2} title="كيفية تطبيق كود خصم الترويجي">
            بمجرد تحديد كود الخصم الذي تريد استخدامه عبر موقع الكوبون، عملية
            الإستفادة من كوبون الخصم بسيطة. بعد العثور ونسخ رمز القسيمة، قم
            بإضافة المنتج إلى عربة التسوق الخاصة بك، لصق الرمز و تطبيقه للحصول
            على مجموع الشراء بعد الخصم، وأخيرا القيام بعملية الدفع.
          </StepCard>
          
          <StepCard image={Step3} title="تأكد من تلبية الحد الأدنى للطلب">
            العديد من القسائم تشترط حد أدنى من الشراء. وهذا يعني أن الطلب الخاص
            بك عليه أن يكون يساوي أو أكثر من مبلغ معين على المنتجات المؤهلة قبل
            أن تتمكن من الحصول على الخصم. الحد الأدنى ينطبق فقط على التكلفة
            الفعلية للقطعة في طلبك بعد أي خصومات فورية ولا تشمل تكاليف إضافية
            مثل الضرائب أو الشحن. مرة أخرى، يمكنك أحيانا الحصول على أدلة من
            الرمز الترويجي نفسه.
          </StepCard>
        </div>
      </Container>
    </div>
  );
};

export default HowToUseSection;
