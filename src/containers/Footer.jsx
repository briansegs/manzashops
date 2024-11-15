const Footer = () => {
  return (
    <footer className="flex flex-col pt-8 pb-12 px-9 w-full text-[#f2f2f2] bg-black">
      <div className="flex lg:flex-row flex-col w-full">
        <div className="flex flex-col items-center mr-8">
          <img
            src="/assets/favicon.png"
            className=" w-96 border-[1px] border-white"
          />

          <p className="text-[28px]">Est.2024</p>
        </div>

        <div className="flex lg:w-7/12 w-full justify-around">
          <div className="">
            <p className="text-[28px]">more</p>
            {Array(5)
              .fill()
              .map((_, index) => (
                <ul key={index} className="pl-12">
                  <a href="" className="inline-block text-blue-white mt-[2vh]">
                    contact
                  </a>{" "}
                </ul>
              ))}
          </div>

          <div className="">
            <p className="text-[28px]">more</p>
            {Array(5)
              .fill()
              .map((_, index) => (
                <ul key={index} className="pl-12">
                  <a href="" className="inline-block text-blue-white mt-[2vh]">
                    contact
                  </a>{" "}
                </ul>
              ))}
          </div>

          <div className="">
            <p className="text-[28px]">more</p>
            {Array(5)
              .fill()
              .map((_, index) => (
                <ul key={index} className="pl-12">
                  <a href="" className="inline-block text-blue-white mt-[2vh]">
                    contact
                  </a>{" "}
                </ul>
              ))}
          </div>
        </div>
      </div>

      <div className="flex w-full md:flex-row flex-col mt-4">
        <p className="text-[28px] w-1/2 flex md:justify-end justify-start">
          Socials
        </p>

        <ul className="flex md:pl-8 pl-2 md:gap-10 gap-2 lg:w-1/2 w-full justify-around md:justify-start md:mt-12 mt-2">
          <a href="">contact</a> <a href="">contact</a>
          <a href="">contact</a> <a href="">contact</a> <a href="">contact</a>{" "}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
