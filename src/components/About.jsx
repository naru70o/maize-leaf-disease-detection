function About() {
  return (
    <div className="bg-[linear-gradient(to_bottom,#6B8E23,#228B22)] py-[72px] px-8 text-white">
      <div className="container mx-auto ">
        <div className="flex flex-col">
          <h1 className="text-center font-bold text-5xl sm:max-w-[648px] mx-auto sm:text-6xl tracking-tighter">
            About our services
          </h1>
          <div className="flex flex-col gap-8 lg:flex-row-reverse mt-16 items-center">
            <p className="text-center lg:text-start mt-5 text-xl text-white/70 max-w-xl mx-auto lg:max-w-[400px]">
              Our Leaf Disease Detector service is an innovative solution
              designed to help farmers, gardeners, and agricultural
              professionals quickly identify and address plant health issues.
              <br />
              By leveraging cutting-edge technology, including artificial
              intelligence and advanced image recognition, our system analyzes
              leaf images to detect and diagnose a wide range of diseases and
              deficiencies.
            </p>
            <div className="image backgro h-72 lg:h-96 w-full bg-cover bg-center bg-no-repeat rounded-md mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
