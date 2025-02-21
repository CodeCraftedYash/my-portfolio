function WindowsLoading() {
    return (
      <div className="flex flex-col items-center justify-center w-40 lg:w-52">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-xs h-auto p-4 bg-black flex flex-col items-center border-4 rounded-lg relative">
          <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 flex flex-wrap items-center justify-center -skew-x-12">
            <div className="w-1/2 h-1/2 bg-red-600 border-2 border-black"></div>
            <div className="w-1/2 h-1/2 bg-green-600 border-2 border-black"></div>
            <div className="w-1/2 h-1/2 bg-blue-600 border-2 border-black"></div>
            <div className="w-1/2 h-1/2 bg-yellow-600 border-2 border-black"></div>
          </div>
          <div className="w-full h-full top-0 absolute flex items-center justify-center"><div className="w-3/12 h-full skew-x-[45deg] bg-white/20"></div></div>
          <div className="w-20 sm:w-24 md:w-28 h-3 border-2 rounded-lg mt-2 flex flex-row items-start overflow-hidden gap-0.5">
            {Array(3).fill(0).map((_, i) => (
              <div
                key={i}
                className="w-1/12 aspect-square bg-blue-800 rounded-s-full animate-moving-animation"
                style={{
                  backgroundImage: "linear-gradient(to bottom,blue,lightblue,blue)",
                }}
              ></div>
            ))}
          </div>
        </div>
  
        <div className="w-4 h-8 bg-white mt-2"></div>
        <div className="w-12 h-4 bg-white mt-2"></div>
      </div>
    );
  }
  
  export default WindowsLoading;
  