const ProductCard = ({ title, href, img, name, price, description }) => {
  return (
    <a
      href={href}
      className="bg-header flex flex-col rounded-[10px] min-h-[420px] h-fit pb-4 min-w-[250px] w-[250px] border-white border-[1px] shadow-[2px_2px_5px_white]"
    >
      <p className="text-white text-base py-1 w-full text-center capitalize">
        {title}
      </p>

      <img
        src={img}
        alt="product-image"
        className="w-full h-48 bg-slate-600 object-cover"
      />

      <div className="w-full flex-col text-white p-4 gap-3">
        <p className="capitalize">
          name: <span>{name}</span>
        </p>

        <p className="capitalize">
          price: <span className="text-lg text-green-500">${price}</span>
        </p>

        <div className="flex flex-col gap-[1px] h-full">
          <p className="capitalize">description:</p>

          <p className="pl-2 pr-[2px] overflow-y-auto text-sm h-36">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
