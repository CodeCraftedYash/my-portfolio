import { ColourfulText } from "./CoulorfulText";

export default function About() {
  return (
    <div className="max-w-xl h-auto border-2 rounded-2xl overflow-hidden bg-black shadow-lg ">
      {/* Header with Circles */}
      <div className="w-full bg-red-800 flex items-center p-4 gap-2 shadow-md shadow-slate-300">
        <div className="w-4 h-4 bg-yellow-400 rounded-full border-2 border-black"></div>
        <div className="w-4 h-4 bg-yellow-400 rounded-full border-2 border-black"></div>
        <div className="w-4 h-4 bg-yellow-400 rounded-full border-2 border-black"></div>
      </div>

      {/* Content */}
      <main className="flex flex-col items-center justify-center p-4 md:p-6 ">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-blue-400">About Me</h1>
        <section className="md:text-center text-left">
          <p className="px-4 text-base md:text-lg leading-relaxed">
            Hello there, I am <span className="font-bold font-serif text-blue-400">Yash</span> - a web developer specializing in <span className="text-blue-400">frontend</span>.
            <br /> I craft user-focused websites that drive conversions and resonate with audiences.
            <br /> Currently based in Jamshedpur, <ColourfulText text="INDIA" />
          </p>
        </section>
      </main>
    </div>
  );
}
