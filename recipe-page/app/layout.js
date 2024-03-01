import { Outfit, Young_Serif } from "next/font/google";
import "./globals.css";


const youngSerif = Young_Serif({subsets: ["latin"], weight: "400"});


export const metadata = {
  title: "Recipe Page (Overkill)",
  description: "Recipe Page challenge by FrontendMentor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${youngSerif.className} bg-egg-shell h-full w-full flex items-center justify-center`}>{children}</body>
    </html>
  );
}
