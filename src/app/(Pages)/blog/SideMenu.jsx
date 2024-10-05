import OfferCard from "@/app/_components/Global/OfferCard";

const SideMenu = () => {
  return (
    <div>
      <div className="latest-offers">
      <h1 className="text-3xl font-bold ">
        احدث<span className="text-primary"> الكوبونات </span>
      </h1>
      <div className="flex flex-col gap-7 mt-5">
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </div>
      </div>
    </div>
  );
};

export default SideMenu;
