import Image from "next/image";

const StepCard = ({title, children, image}) => {
  return (
    <div className="bg-white hover:shadow-md transition-all border-2 shadow-sm rounded-xl py-7">
      <Image src={image} className="mx-auto" alt="Step Image" />
      <h1 className="font-bold text-center text-xl mt-4">
        {title}
      </h1>
      <p className="mx-5 mt-6">{children}</p>
    </div>
  );
};

export default StepCard;
