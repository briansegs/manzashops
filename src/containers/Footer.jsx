const Footer = () => {
  return (
    <footer className="flex flex-col pt-8 pb-12 px-9 w-full text-[#f2f2f2] bg-black capitalize">
      <div className="flex lg:flex-row flex-col w-full">
        <div className="flex flex-col items-center mr-8">
          <img
            src="/manzashops/assets/favicon.png"
            className="w-96 border-[1px] border-white"
          />

          <p className="text-[28px]">Est.2024</p>
        </div>

        <div className="flex lg:w-7/12 w-full justify-around">
          <div>
            <p className="text-[28px] mb-[15px]">more</p>
            <div className="pl-12 flex flex-col gap-[15px]">
              <a href="">contact</a>
              <a href="">contact</a>
              <a href="">contact</a>
              <a href="">contact</a>
              <a href="">contact</a>
            </div>
          </div>

          <div>
            <p className="text-[28px] mb-[15px]">more</p>
            <div className="pl-12 flex flex-col gap-[15px]">
              <a href="">contact</a>
              <a href="">contact</a>
              <a href="">contact</a>
              <a href="">contact</a>
              <a href="">contact</a>
            </div>
          </div>

          <div>
            <p className="text-[28px] mb-[15px]">more</p>
            <div className="pl-12 flex flex-col gap-[15px]">
              <a href="">contact</a>
              <a href="">contact</a>
              <a href="">contact</a>
              <a href="">contact</a>
              <a href="">contact</a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full md:flex-row flex-col mt-4">
        <p className="text-[28px] w-1/2 flex md:justify-end justify-start">
          Socials
        </p>

        <div className="flex md:pl-8 pl-2 md:gap-10 gap-2 lg:w-1/2 w-full justify-around md:justify-start md:mt-12 mt-2">
          <a href="">contact</a>
          <a href="">contact</a>
          <a href="">contact</a>
          <a href="">contact</a>
          <a href="">contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
