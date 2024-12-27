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
    <div className="bg-[linear-gradient(to_bottom,#228B22,#6B8E23)] py-[72px] text-white px-8">
      <div className="container mx-auto">
        <h1 className="text-center font-bold text-5xl sm:max-w-[648px] mx-auto sm:text-6xl tracking-tighter">
          Our Features
        </h1>
        <div className="flex flex-col gap-8 lg:gap-16 sm:flex-row mt-16">
          <Feature />
        </div>
      </div>
    </div>
  );
}

export default Features;
