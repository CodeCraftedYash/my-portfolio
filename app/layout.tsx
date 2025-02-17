import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets:["latin"]});

export const metadata: Metadata = {
  title: "Yash's Portfolio",
  description: "Yash Mishra Portfolio frontend developer Jamshedpur India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-black text-white`}
      >
        {children}
        <footer className="my-8 w-full">
          Will <br />
          write <br />
          footer <br />
        </footer>
      </body>
    </html>
  );
}
