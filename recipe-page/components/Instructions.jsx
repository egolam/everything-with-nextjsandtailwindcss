import { Outfit } from "next/font/google";
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Instructions() {
  return (
    <section>
      <hr />
      <h2 className="mt-8 text-primary text-3xl">Instructions</h2>
      <ol
        className={`${outfit.className} list-inside list-decimal text-wenge-brown mt-6 flex flex-col gap-4 marker:text-primary marker:font-bold`}
      >
        <li>
          <b>Beat the eggs: </b>
          In a bowl, beat the eggs with a pinch of salt and pepper until they
          are well mixed. You can add a tablespoon of water or milk for a
          fluffier texture.
        </li>
        <li>
          <b>Heat the pan: </b>
          Place a non-stick frying pan over medium heat and add butter or oil.
        </li>
        <li>
          <b>Cook the omelette: </b>
          Once the butter is melted and bubbling, pour in the eggs. Tilt the pan
          to ensure the eggs evenly coat the surface.
        </li>
        <li>
          <b>Add fillings (optional): </b>
          When the eggs begin to set at the edges but are still slightly runny
          in the middle, sprinkle your chosen fillings over one half of the
          omelette.
        </li>
        <li>
          <b>Fold and serve: </b>
          As the omelette continues to cook, carefully lift one edge and fold it
          over the fillings. Let it cook for another minute, then slide it onto
          a plate.
        </li>
        <li>
          <b>Enjoy: </b> Serve hot, with additional salt and pepper if needed.
        </li>
      </ol>
    </section>
  );
}
