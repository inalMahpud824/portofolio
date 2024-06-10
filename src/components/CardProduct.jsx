const CardProduct = ({title, img}) => {
  return (
    <div
      className="w-80 min-h-64 bg-cover rounded-lg shadow-md overflow-hidden cursor-pointer block relative"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className=" flex justify-center items-center bg-black bg-opacity-50 h-full w-full transition-opacity duration-1000 ease-in-out opacity-0 hover:opacity-100 absolute bottom-0">
        <p className="text-xl font-semibold text-white normal-case">{title}</p>
      </div>
    </div>
  );
};

export default CardProduct;
