import OfferCard from "../_components/Global/OfferCard";
import Container from "../_components/Ui/Container";

const LatestOffersSection = () => {
  return (
    <div className="bg-gray-50/40 border-y-2 border-gray-100 py-14">
      <Container>
        <h1 className="text-5xl font-bold mb-12">
          احدث <span className="text-primary">العروض</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            <OfferCard />
            <OfferCard />
            <OfferCard />
            <OfferCard />
            <OfferCard />
            <OfferCard />
        </div>
      </Container>
    </div>
  );
};

export default LatestOffersSection;
