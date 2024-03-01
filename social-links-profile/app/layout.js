import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Social Media Links",
  description: "Social media links challenge by FrontendMentor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full h-full bg-off-black`}>{children}</body>
    </html>
  );
}
