import Link from "next/link";

export default function Navbar (){

    return(
        <>
        <header>
        <nav className="w-full border-b-2 p-2 "> 
          <ul className="flex items-center justify-center gap-10 text-xl ">
           <li className="sm:hover:cursor-pointer sm:hover:text-green-300"><Link href="/">Home</Link></li>
           <li className="sm:hover:cursor-pointer sm:hover:text-green-300"><Link href="/education">Education</Link></li>
           <li className="sm:hover:cursor-pointer sm:hover:text-green-300"><Link href="/contact">Contact Me</Link></li>
          </ul>
          </nav>
          </header>
        </>
    );

}

