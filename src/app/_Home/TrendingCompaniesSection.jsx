import Link from "next/link";
import CompanyCard from "../_components/Global/CompanyCard";
import Container from "../_components/Ui/Container";

const TrendingCompaniesSection = () => {
  return (
    <div className="bg-white border-t-2 py-10">
      <Container>
        <header className="flex flex-col md:flex-row items-start justify-between">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">
          المتاجر <span className="text-primary">الرائجة</span>
        </h1>
        <Link href="/companies" className="text-white hidden md:block bg-primary hover:bg-transparent hover:text-primary hover:border-primary transition-all border-2 border-transparent text-xl py-4 px-12 rounded-lg">جميع المتاجر</Link>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
        </div>
      </Container>
    </div>
  );
};

export default TrendingCompaniesSection;
