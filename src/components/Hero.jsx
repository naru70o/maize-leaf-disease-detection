function Hero() {
  return (
    <div className="bg-[linear-gradient(to_bottom,#228B22,#6B8E23)] py-6 overflow-clip text-white">
      <div className="container mx-auto relative">
        {/* navigation */}
        <div className="flex justify-between items-center w-full px-8">
          <div className="relative">
            <img
              alt="logo website"
              src="./logo.png"
              className="w-auto h-[50px]"
            />
          </div>
          <ul className="flex items-center gap-4 sm:gap-4 font-medium transition-all duration-200 cursor-pointer">
            <li className="hover:text-white/70">Home</li>
            <li className="hover:text-white/70">About</li>
            <li className="hover:text-white/70">Download</li>
            <li className="bg-[#6B8E23] rounded-sm px-2 py-1 hover:text-white/70 transition-all duration-150 hidden sm:inline">
              Detect
            </li>
          </ul>
          <div className="hidden pr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32px"
              viewBox="0 -960 960 960"
              width="32px"
              fill="#FFFFFF"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col pt-[72px] mx-auto">
          {/* hedaer */}
          <h1 className="text-2xl text-center px-4 font-bold sm:text-3xl lg:text-5xl sm:max-w-[80%] mx-auto">
            Ka Faa'iidayso Tiknoolajiyadda si Aad Uga Hortagto Cudurrada
            Dalagyadaada
          </h1>
          {/* button */}
          <div className="flex justify-center gap-4">
            <button className="bg-[#6B8E23] font-medium hover:text-white/70 px-4 py-2 rounded-sm mt-8 transition-all shadow-lg ">
              Detect
            </button>
            <button className="bg-[#6B8E23] font-medium hover:text-white/70 px-4 py-2 rounded-sm mt-8 transition-all shadow-xl">
              Download
            </button>
          </div>
          <div className="flex justify-center mt-8">
            <img
              alt="heo image"
              src="./mobile.png"
              className="w-fit h-[324px] sm:hidden"
            />
            <img
              alt="heo image"
              src="./laptop.png"
              className="w-fit h-[324px] hidden sm:flex"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
