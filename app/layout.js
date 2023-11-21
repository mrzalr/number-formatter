import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Number formatter",
  description: "Number formatter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-screen w-screen flex flex-col items-center p-12`}
      >
        {children}
      </body>
    </html>
  );
}
