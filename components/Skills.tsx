import { skills } from "./utils/skills";

function Skills() {
  return (
    <div className="w-fit min-h-16 flex items-center justify-center flex-col p-10 mx-auto lg:mt-20">
      <h1 className="text-center text-2xl text-blue-400 font-bold md:text-4xl mb-8 lg:mb-16 border-b-2 pb-2">My Skills</h1>
      <ul className="max-w-80 sm:max-w-xl md:max-w-4xl lg:max-w-6xl mx-4 flex flex-wrap gap-6 items-center justify-center">
        {skills.map((skill) => (
          <li key={skill.id} className="relative group ">
            {/* Skill Image */}
            <img
              src={skill.logo}
              alt={skill.title}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover transition-transform duration-300 group-hover:scale-110 bg-white rounded-lg"
              loading="lazy"
            />
            {/* Skill Name (Hidden by Default, Slides in on Hover) */}
            <span className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[100%] opacity-0 group-hover:-translate-y-2 group-hover:opacity-100 transition-all duration-300 text-sm sm:text-base bg-black text-white px-1 py-1 rounded-md max-w-full font-bold shadow-md "> 
              {skill.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
