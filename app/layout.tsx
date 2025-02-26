import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { socialMediaLinks } from "@/components/utils/footer";
import Image from "next/image";
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

        <footer className=" bg-slate-900 mt-8 w-full min-h-16 border-t-2 grid grid-cols-3 pt-2 lg:px-40 sm:px-8 px-0 ">
  {/* Navigation Links */}
  <nav aria-label="Footer Navigation" className=" w-fit px-4">
    <ul>
      <li className="sm:hover:text-green-600 text-base sm:text-lg py-1 sm:hover:border-b-2">
        <Link href="/contact">Contact Me</Link>
      </li>
      <li className="sm:hover:text-green-600 text-base sm:text-lg py-1 sm:hover:border-b-2">
        <Link href="/about">About</Link>
      </li>
      <li className="sm:hover:text-green-600 text-base sm:text-lg py-1 sm:hover:border-b-2">
        <Link href="/project">Projects</Link>
      </li>
    </ul>
  </nav>

  {/* Social Media Links */}
  <nav aria-label="Social Media Links" className="w-fit px-4">
    <ul>
      {socialMediaLinks.map((element) => (
        <li key={element.id}>
          <Link href={element.link} className="flex items-center gap-2 mb-2 sm:hover:text-green-600 sm:hover:border-b-2" target="_blank" rel="noopener noreferrer">
            <Image src={element.logo} alt={element.title} width={24} height={24} className="bg-white rounded-full"/>
            <span>{element.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
{/**Tech stack */}
  <nav aria-label="Site tech stacks" className="w-fit px-4 ">
      <h1 className="2xl:text-xl xl:text-lg  text-nowrap text-base font-bold bg-slate-700 px-2 rounded-lg">Made this website with</h1>
    <ul>
      <li className="sm:hover:text-green-600 text-base sm:text-lg py-1 sm:hover:border-b-2 px-2"><Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next js</Link></li>
      <li className="sm:hover:text-green-600 text-base sm:text-lg py-1 sm:hover:border-b-2 px-2"><Link href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">Typesript</Link></li>
      <li className="sm:hover:text-green-600 text-base sm:text-lg py-1 sm:hover:border-b-2 px-2"><Link href="https://motion.dev/" target="_blank" rel="noopener noreferrer">Framer Motion</Link></li>
      <li className="sm:hover:text-green-600 text-base sm:text-lg py-1 sm:hover:border-b-2 px-2"><Link href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind,etc</Link></li>
    </ul>
  </nav>

  {/* Extra Section (If Needed) */}
  <div className="w-full col-span-full flex justify-center">
    <p className="text-gray-400 text-sm text-nowrap ">&copy; {new Date().getFullYear()} Yash Mishra</p>
  </div>
</footer>

      </body>
    </html>
  );
}
