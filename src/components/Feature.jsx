const AllFeatures = [
  {
    feature:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur enim animi doloremque laboriosam",
    availiable: true,
  },
  {
    feature:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur enim animi doloremque labo",
    availiable: false,
  },
  {
    feature:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur enim animi doloremque laboriosam molestias earum ad voluptate non",
    availiable: false,
  },
];

function Feature() {
  return AllFeatures.map((feature) => {
    return (
      <div className="bg-[#90EE90] text-[#228b22] flex flex-col justify-center items-center p-10 w-[400px] mx-auto">
        {feature.availiable ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="36px"
            viewBox="0 -960 960 960"
            width="36px"
            fill="#228b22"
            className=""
          >
            <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="36px"
            viewBox="0 -960 960 960"
            width="36px"
            fill="#228b22"
          >
            <path d="M320-160h320v-120q0-66-47-113t-113-47q-66 0-113 47t-47 113v120Zm160-360q66 0 113-47t47-113v-120H320v120q0 66 47 113t113 47ZM160-80v-80h80v-120q0-61 28.5-114.5T348-480q-51-32-79.5-85.5T240-680v-120h-80v-80h640v80h-80v120q0 61-28.5 114.5T612-480q51 32 79.5 85.5T720-280v120h80v80H160Z" />
          </svg>
        )}

        <h1 className="text-[#228b22] text-2xl text-center font-bold mt-4">
          {feature.availiable ? "Avaliable" : "Planning Face"}
        </h1>

        <p className="text-center mt-8">{feature.feature}</p>
      </div>
    );
  });
}

export default Feature;
