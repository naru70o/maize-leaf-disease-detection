import Image from "next/image";
function Navigation() {
  return (
    <div className="flex bg-white justify-between items-center w-full">
      <div className="relative">
        <h1 className="text-2xl text-white">Detector</h1>
        {/* <img
          alt="logo website"
          src="./logo.png"
          className="w-[40px] h-[40px]"
        /> */}
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#FFFFFF"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </div>
    </div>
  );
}

export default Navigation;
