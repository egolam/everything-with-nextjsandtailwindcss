import Description from "@/components/Description";
import HeroImage from "@/components/HeroImage";
import Ingredients from "@/components/Ingredients";
import Instructions from "@/components/Instructions";
import Nutrition from "@/components/Nutrition";

export default function Home() {
  return (
    <main className="bg-white md:w-1/2 md:my-10 md:p-10 md:rounded-3xl flex flex-col w-[375px]">
      <HeroImage />
      <div className="flex flex-col gap-8 px-8 mx-auto mb-4">
        <Description />
        <Ingredients />
        <Instructions />
        <Nutrition />
      </div>
    </main>
  );
}
