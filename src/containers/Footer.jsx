const Footer = () => {
  return (
    <footer className="pt-[5vh] text-[#f2f2f2] bg-black w-[100vw] h-[50vh] hover:bg-black">
      <div className="w-[20vw] h-[20vh]">
        <img
          src="/src/assets/favicon.png"
          className="ml-5vh w-[20vw] h-[30vh] border-[1px] border-white"
        />
      </div>
      <div className="mt-[10vh] ml-[20vh] w-[10vw] h-[10vh] bg-black">
        <p className="text-[28px]">Est.2024</p>
      </div>

      <div className="w-[15vw] h-[30vh] bg-black mt-[-40vh] ml-[60vh] block">
        <p className="text-[28px]">more</p>
        {Array(5)
          .fill()
          .map((_, index) => (
            <ul key={index}>
              <a href="" className="inline-block text-blue-white mt-[2vh]">
                contact
              </a>{" "}
            </ul>
          ))}
      </div>

      <div className="w-[15vw] h-[30vh] bg-black mt-[-30vh] ml-[100vh] block">
        <p className="text-[28px]">more</p>
        {Array(5)
          .fill()
          .map((_, index) => (
            <ul key={index}>
              <a href="" className="inline-block text-blue-white mt-[2vh]">
                contact
              </a>{" "}
            </ul>
          ))}
      </div>

      <div className="w-[15vw] h-[30vh] bg-black mt-[-30vh] ml-[140vh] block">
        <p className="text-[28px]">more</p>
        {Array(5)
          .fill()
          .map((_, index) => (
            <ul key={index}>
              <a href="" className="inline-block text-blue-white mt-[2vh]">
                contact
              </a>{" "}
            </ul>
          ))}
      </div>

      <div className="w-[40vw] h-[15vh] bg-black mt-0 ml-[90vh] flex">
        <p className="text-[28px]">Socials</p>
        <ul>
          {" "}
          <a href="" className="flex text-white mt-[6vh]">
            contact
          </a>{" "}
        </ul>
        <ul>
          <a href="" className="flex text-white mt-[6vh]">
            contact
          </a>
        </ul>
        <ul>
          <a href="" className="flex text-white mt-[6vh]">
            contact
          </a>{" "}
        </ul>
        <ul>
          <a href="" className="flex text-white mt-[6vh]">
            contact
          </a>{" "}
        </ul>
        <ul>
          <a href="" className="flex text-white mt-[6vh]">
            contact
          </a>{" "}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
