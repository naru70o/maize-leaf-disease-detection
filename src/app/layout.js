import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"], // Specify the font subset
  weight: ["100", "300", "400", "700", "900"], // Specify the weights you need
  variable: "--font-lato", // Optional: CSS variable for custom usage
});

export const metadata = {
  title: "disease-detector",
  description:
    "Discover our advanced agriculture disease detection platform designed to help farmers identify and prevent crop diseases early. Empowering Somali farmers with modern solutions for healthier crops, improved productivity, and sustainable farming practices. Protect your farm today",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overscroll-none scroll-smooth">
      <body className={`overscroll-none ${lato.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
