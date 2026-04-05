import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Teshale Ayansa | Software Engineer",
  description: "Portfolio of Teshale Ayansa — Software Engineer specializing in Web Development and Cybersecurity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}