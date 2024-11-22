/* eslint-disable react/prop-types */

import { mockHref } from "../constants";
import BadgeItems from "./BadgeItems";

const ContentContainer = ({ contentBoxData }) => {
  return (
    <div className="flex flex-wrap pl-9 gap-4">
      <BadgeItems data={contentBoxData} />

      {Array(50 - contentBoxData.length)
        .fill()
        .map((_, index) => (
          <div
            key={index}
            className="mb-11 w-[60px] h-[60px] rounded-[10px] bg-[#800080] text-white border-[1px] border-black shadow-[2px_2px_5px_white] hover:shadow-[2px_2px_5px_#60b3d1]"
          >
            <a href={mockHref}>
              <img
                src={"/manzashops/assets/aldo.jpeg"}
                className="w-[60px] h-[60px] rounded-[10px] bg-[#800080] text-white border-[1px] border-black shadow-[2px_2px_5px_white] hover:shadow-[2px_2px_5px_#60b3d1]"
              />
            </a>
            {"aldo"}
          </div>
        ))}
    </div>
  );
};

export default ContentContainer;
