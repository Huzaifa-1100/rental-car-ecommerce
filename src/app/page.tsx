import Hero from "@/components/main/hero";
import Button from "@/components/sub/button";
import PopularCar from "@/components/main/popularCar";
import RecommendedCar from "@/components/main/recommenderCar";

export default async function Home() {
  return (
    <div className="wrapper bg-bg py-9">
      {/* Hero Section */}
      <Hero />

      {/* Card Section */}

      {/* Popular Car */}
      <div>
        <h1 className="jakarta-addButton text-secondary300 text-start my-10">
          Popular Car
        </h1>
        <PopularCar />
      </div>

      {/* Recomendation Car */}
      <div>
        <h1 className="jakarta-addButton text-secondary300 text-start my-10 ">
          Recomendation Car
        </h1>
        <RecommendedCar />
        <div className="my-16 flex justify-between items-center px-4 ">
          <div></div>
          <Button text={"Show more car"} url={"/category"} />
          <p className="text-secondary300 jakarta-small">120 Car</p>
        </div>
      </div>
    </div>
  );
}
