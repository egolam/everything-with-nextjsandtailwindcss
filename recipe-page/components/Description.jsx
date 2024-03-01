import { Outfit } from "next/font/google";
const outfit = Outfit({subsets: ["latin"], weight: ["400", "600", "700"]});

export default function Description() {
  return (
    <section className="flex flex-col gap-5 mt-8">
      <h1 className="font-bold md:text-4xl text-3xl text-dark-charcoal tracking-wider">Simple Omelette Recipe</h1>
      <p className={`${outfit.className} font-normal md:text-base text-sm text-wenge-brown`}>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
      <article className={`${outfit.className} bg-rose-dark md:p-8 p-4 rounded-2xl flex flex-col gap-4`}>
        <h3 className="md:text-2xl text-xl text-primary-dark font-semibold">Preparation Time</h3>
        <ul className="text-wenge-brown list-disc list-inside flex flex-col gap-4">
          <li><b>Total: </b>Approximately 10 minutes</li>
          <li><b>Preparation: </b>5 minutes</li>
          <li><b>Cooking: </b>5 minutes</li>
        </ul>
      </article>
    </section>
  );
}
