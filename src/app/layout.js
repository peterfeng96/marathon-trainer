import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "./Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marathon Trainer",
  description: "Get ready for your next marathon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
