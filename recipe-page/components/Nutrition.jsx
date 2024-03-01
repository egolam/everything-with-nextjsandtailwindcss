import { Outfit } from "next/font/google";
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Nutrition() {
  return (
    <section className="flex flex-col gap-8">
      <hr />
      <h2 className=" text-primary text-3xl">Nutrition</h2>
      <div className={`${outfit.className} flex flex-col gap-6 text-wenge-brown`}>
        <p className="text-base">
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        <ul className="flex flex-col gap-2">
          <div className="flex ml-8">
            <li className="w-1/2">Calories</li>
            <li className=""><b>277 kcal</b></li>
          </div>
          <hr />
          <div className="flex ml-8">
            <li className="w-1/2">Carbs</li>
            <li className=""><b>0 g</b></li>
          </div>
          <hr />
          <div className="flex ml-8">
            <li className="w-1/2">Protein</li>
            <li className=""><b>20 g</b></li>
          </div>
          <hr />
          <div className="flex ml-8">
            <li className="w-1/2">Fat</li>
            <li className=""><b>22 g</b></li>
          </div>
        </ul>
      </div>
    </section>
  );
}