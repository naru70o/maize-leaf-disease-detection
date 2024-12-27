function About() {
  return (
    <div className="bg-[linear-gradient(to_bottom,#6B8E23,#228B22)] py-[72px] px-8 text-white">
      <div className="container mx-auto ">
        <div className="flex flex-col">
          <h1 className="text-center font-bold text-5xl sm:max-w-[648px] mx-auto sm:text-6xl tracking-tighter">
            About our services
          </h1>
          <div className="flex flex-col gap-8 lg:flex-row-reverse mt-5 items-center">
            <p className="text-center mt-5 text-xl text-white/70 max-w-xl mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              veritatis necessitatibus repellendus laborum optio sequi libero
              laborum sed voluptatibus incidunt. Quas, amet autem.
            </p>
            <div className="image backgro h-72 lg:h-96 w-full bg-cover bg-center bg-no-repeat rounded-md mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
