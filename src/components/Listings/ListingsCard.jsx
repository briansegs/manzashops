const ListingsCard = ({ img, name, rate, links, rating, profession }) => {
  return (
    <div className="bg-header flex flex-col rounded-[10px] min-h-[420px] h-fit pb-8 min-w-[250px] w-[250px] border-white border-[1px] shadow-[2px_2px_5px_white]">
      <img
        src={img}
        alt="product-image"
        className="w-full h-48 bg-slate-600 object-fit mt-6"
      />

      <div className="w-full flex flex-col text-white p-4 gap-3">
        <p className="capitalize">
          name: <span>{name}</span>
        </p>

        <p className="capitalize">
          profession: <span>{profession}</span>
        </p>

        <p className="capitalize">
          Hourly: <span className="text-lg text-green-500">${rate}</span>
        </p>

        <p className="capitalize">
          Manza Rated: <span>{rating}</span>
        </p>

        <div className="flex gap-[1px] w-full justify-between">
          {links.map(({ href, id, img, alt }) => (
            <a
              key={id}
              href={href}
              className="border-2 rounded-lg border-white hover:border-secondary size-10"
            >
              <img src={img} alt={alt} className="size-full rounded-md" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingsCard;
