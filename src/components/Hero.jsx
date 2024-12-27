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
              className="w-auto h-[50px] -translate-x-2"
            />
          </div>
          <ul className="flex items-center gap-4 sm:gap-4 font-medium transition-all duration-200 cursor-pointer">
            <li className="hover:text-white/70">Home</li>
            <li className="hover:text-white/70">About</li>
            <li className="hover:text-white/70">Faqs</li>
            <li className="text-[#6B8E23] bg-[#D9D9D9] rounded-sm px-2 py-1 hover:text-[#6B8E23]/70 transition-all duration-150 hidden sm:inline">
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
          <h1 className="text-3xl font-bold sm:text-5xl self-center text-center max-w-[535px] inline-flex tracking-tight">
            Leverage Technology to Prevent Diseases in Your Crops
          </h1>
          {/* button */}
          <div className="flex justify-center gap-4 mt-4 text-[#6b8e23]">
            <button className="bg-[#D9D9D9] min-w-28 font-medium hover:-translate-y-1 px-4 py-2 rounded-sm duration-200 mt-8 transition-all shadow-lg flex">
              Detect
              <span className="relative flex h-3 w-3 top-[7.5px] -right-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
            </button>
            <button
              className="bg-[#D9D9D9] min-w-28 font-medium px-4 py-2 rounded-sm duration-200 mt-8 transition-all overflow-clip shadow-lg relative opacity-50"
              disabled={true}
            >
              Download
              <span className="bg-[#FFD700] text-black/70 text-[10px] px-4 absolute rotate-45 -translate-x-6 -translate-y-1">
                Feture
              </span>
            </button>
          </div>
          <div className="flex justify-center ">
            <img
              alt="heo image"
              src="./mobile.png"
              className="w-fit h-[324px] mt-16 sm:hidden "
            />
            <img
              alt="heo image"
              src="./laptop.png"
              className="w-fit h-[324px] mt-16 hidden sm:flex"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
