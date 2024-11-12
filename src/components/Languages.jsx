const Languages = () => {
  return (
    <div className="bg-black w-[38vh] h-[61vh] mt-[-55vh] mb-[5vh] rounded-tr-[10px] rounded-br-[10px]">
      <a href="" className="text-[#f2f2f2] mb-[10vh] mt-[20vh]">
        Choose Your Language
      </a>

      <div className="text-[25px] mt-[10vh] ml-[5vw] items-flex justify-center w-[5vh] h-[25vh] text-[#f2f2f2] mb-[2vh] rounded-tr-[10px] rounded-br-[10px]">
        {/* add hover to img -> hover{box-shadow: 2px 2px 5px #60b3d1;} */}
        <img
          src="/src/assets/english.jpeg"
          className="absolute mt-[4vh] ml-[-7vh] inline-block w-[5vh] h-[5vh] rounded-[20px] bg-black text-white"
          style={{ boxShadow: "2px 2px 5px white" }}
        />
        {/* add hover to img -> hover{box-shadow: 2px 2px 5px #60b3d1;} */}
        <img
          src="/src/assets/spain.jpeg"
          className="absolute mt-[12vh] ml-[-7vh] inline-block w-[5vh] h-[5vh] rounded-[20px] bg-black text-white"
          style={{ boxShadow: "2px 2px 5px white" }}
        />
        {/* add hover to img -> hover{box-shadow: 2px 2px 5px #60b3d1;} */}
        <img
          src="/src/assets/french.jpeg"
          className="absolute mt-[20vh] ml-[-7vh] inline-block w-[5vh] h-[5vh] rounded-[20px] bg-black text-white"
          style={{ boxShadow: "2px 2px 5px white" }}
        />
        {/* add hover to img -> hover{box-shadow: 2px 2px 5px #60b3d1;} */}
        <img
          src="/src/assets/portu.jpeg"
          className="absolute mt-[28vh] ml-[-7vh] inline-block w-[5vh] h-[5vh] rounded-[20px] bg-black text-white"
          style={{ boxShadow: "2px 2px 5px white" }}
        />

        <a
          href="https://www.aldoshoes.com/"
          className="text-[#f2f2f2] mb-[10vh] mt-[20vh]"
        >
          _______ English
        </a>

        <a href="" className="text-[#f2f2f2] mb-[10vh] mt-[20vh]">
          _______ Spanish
        </a>

        <a href="" className="text-[#f2f2f2] mb-[10vh] mt-[20vh]">
          _______ French
        </a>

        <a href="" className="text-[#f2f2f2] mb-[10vh] mt-[20vh]">
          _______ Portugese
        </a>
      </div>
    </div>
  );
};

export default Languages;
