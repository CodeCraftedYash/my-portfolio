import {ColourfulText} from './CoulorfulText'
export default function About (){
    return (
        <main className="border-t-2 w-full">
        <section className=" my-4 mx-2">
        <p className="px-4 text-base">Hello there, I am <span className="font-bold font-sans">Yash</span> - a web developer specializing in frontend . I craft user-focused websites that drive conversions and resonate with audiences.<br /> Currently based in Jamshedpur, <ColourfulText text="INDIA" /></p>
       
        </section>
        </main>
    );

}