import { Outfit } from "next/font/google";
const outfit = Outfit({subsets: ["latin"], weight: ["400", "600", "700"]});

export default function Ingredients() {
  return (
    <section>
        <h2 className={`text-primary text-3xl`}>Ingredients</h2>
        <ul className={`${outfit.className} list-inside list-disc text-wenge-brown mt-6 flex flex-col gap-4`}>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
        </ul>
    </section>
  )
}
