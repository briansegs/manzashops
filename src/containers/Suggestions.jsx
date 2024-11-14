import { itemData } from "../constants";

const Suggestions = () => {
  return (
    <div className="flex items-center pt-3 justify-between bg-[#141414] border-[3px] border-black flex-wrap">
      {itemData.map(({ href, name }) => (
        <a
          key={name}
          href={href}
          className="text-[28px] text-white border-[1px] border-[#1b1e23] bg-black rounded-full flex size-[100px] justify-center items-center hover:text-secondary shadow-[3px_3px_3px_white] hover:shadow-[3px_3px_3px_#60b3d1] overflow-hidden"
        >
          {name}
        </a>
      ))}
    </div>
  );
};

export default Suggestions;
