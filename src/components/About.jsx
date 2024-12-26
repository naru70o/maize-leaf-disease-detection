function About() {
  return (
    <div className="bg-[linear-gradient(to_bottom,#6B8E23,#228B22)] py-[72px] overflow-clip text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col">
          <h1 className="text-2xl text-center px-4 font-bold sm:text-3xl lg:text-5xl sm:max-w-[80%] mx-auto">
            About our services
          </h1>
          <div className="flex flex-col gap-8 lg:flex-row-reverse mt-16 items-center">
            <p className="text-2xl font-medium text-center sm:text-start lg:text-star mt-9">
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
