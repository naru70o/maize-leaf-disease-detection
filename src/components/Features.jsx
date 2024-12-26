import Feature from "./Feature";

const AllFeatures = [
  {
    feature:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur enim animi doloremque laboriosam molestias earum ad voluptate non, itaque illo cupiditate dicta deleniti quidem, mollitia quasi unde consectetur sunt",
    availiable: true,
  },
  {
    feature:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur enim animi doloremque laboriosam molestias earum ad voluptate non, itaque illo cupiditate dicta deleniti quidem, mollitia quasi unde consectetur sunt",
    availiable: false,
  },
  {
    feature:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur enim animi doloremque laboriosam molestias earum ad voluptate non, itaque illo cupiditate dicta deleniti quidem, mollitia quasi unde consectetur sunt",
    availiable: false,
  },
];

function Features() {
  return (
    <div className="bg-[linear-gradient(to_bottom,#228B22,#6B8E23)] py-[72px] overflow-clip text-white">
      <div className="container mx-auto">
        <h1 className="text-2xl text-center px-4 font-bold sm:text-3xl lg:text-5xl sm:max-w-[80%] mx-auto">
          Our Features
        </h1>
        <div className="flex flex-col gap-16 lg:flex-row mt-16">
          <Feature />
        </div>
      </div>
    </div>
  );
}

export default Features;
