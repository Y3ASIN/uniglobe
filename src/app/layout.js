import "@/styles/globals.css";
import { inter } from "@/fonts/fonts.js";
import Header from "./layout/header";
import Footer from "./layout/footer";

export const metadata = {
  title: "Your Website",
  description: "A Next.js 15.1.6 website with Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="mx-auto">{children}</div>
      </main>
      <Footer />
    </body>
  </html>
  );
}
