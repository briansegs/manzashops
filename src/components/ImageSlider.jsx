const ImageSlider = () => {
  return (
    <>
      <div
        className="border-[5px] border-black inline-flex rounded-[10px] relative items-center justify-center bg-[#0000ff] text-white w-[160vh] h-[60vh] mt-0 ml-[38vh] overflow-x-scroll"
        style={{ boxShadow: "10px 10px 10px black" }}
      >
        <a
          href=""
          className="border-[3px] border-black w-[180vh] h-[67vh] rounded-[10px] hover:bg-black hover:border-white"
          style={{ boxShadow: "10px 10px 10px black" }}
        >
          <img
            src="/cover1.png"
            className="border-[3px] border-black w-[180vh] h-[67vh] rounded-[10px] hover:bg-black hover:border-white"
            style={{ boxShadow: "10px 10px 10px black" }}
          />
        </a>
        <a
          href=""
          className="border-[3px] border-black w-[180vh] h-[67vh] rounded-[10px] hover:bg-black hover:border-white"
          style={{ boxShadow: "10px 10px 10px black" }}
        >
          <img
            src="/cover2.png"
            className="border-[3px] border-black w-[180vh] h-[67vh] rounded-[10px] hover:bg-black hover:border-white"
            style={{ boxShadow: "10px 10px 10px black" }}
          />
        </a>
        <a
          href=""
          className="border-[3px] border-black w-[180vh] h-[67vh] rounded-[10px] hover:bg-black hover:border-white"
          style={{ boxShadow: "10px 10px 10px black" }}
        >
          <img
            src="/cover3.png"
            className="border-[3px] border-black w-[180vh] h-[67vh] rounded-[10px] hover:bg-black hover:border-white"
            style={{ boxShadow: "10px 10px 10px black" }}
          />
        </a>
        <a
          href=""
          className="border-[3px] border-black w-[180vh] h-[67vh] rounded-[10px] hover:bg-black hover:border-white"
          style={{ boxShadow: "10px 10px 10px black" }}
        >
          <img
            src="/cover4.png"
            className="border-[3px] border-black w-[180vh] h-[67vh] rounded-[10px] hover:bg-black hover:border-white"
            style={{ boxShadow: "10px 10px 10px black" }}
          />
        </a>
        <a
          href=""
          className="border-[3px] border-black w-[180vh] h-[67vh] rounded-[10px] hover:bg-black hover:border-white"
          style={{ boxShadow: "10px 10px 10px black" }}
        >
          <img
            src="/src/assets/manza.png"
            className="border-[3px] border-black w-[180vh] h-[67vh] rounded-[10px] hover:bg-black hover:border-white"
            style={{ boxShadow: "10px 10px 10px black" }}
          />
        </a>
        <a
          href=""
          className="border-[3px] border-black w-[180vh] h-[67vh] rounded-[10px] hover:bg-black hover:border-white"
          style={{ boxShadow: "10px 10px 10px black" }}
        >
          <img
            src="/cover2.png"
            className="border-[3px] border-black w-[180vh] h-[67vh] rounded-[10px] hover:bg-black hover:border-white"
            style={{ boxShadow: "10px 10px 10px black" }}
          />
        </a>
        <a
          href=""
          className="border-[3px] border-black w-[180vh] h-[67vh] rounded-[10px] hover:bg-black hover:border-white"
          style={{ boxShadow: "10px 10px 10px black" }}
        >
          <img
            src="/cover3.png"
            className="border-[3px] border-black w-[180vh] h-[67vh] rounded-[10px] hover:bg-black hover:border-white"
            style={{ boxShadow: "10px 10px 10px black" }}
          />
        </a>
        <a
          href=""
          className="border-[3px] border-black w-[180vh] h-[67vh] rounded-[10px] hover:bg-black hover:border-white"
          style={{ boxShadow: "10px 10px 10px black" }}
        >
          <img
            src="/cover4.png"
            className="border-[3px] border-black w-[180vh] h-[67vh] rounded-[10px] hover:bg-black hover:border-white"
            style={{ boxShadow: "10px 10px 10px black" }}
          />
        </a>
        <a
          href=""
          className="border-[3px] border-black w-[180vh] h-[67vh] rounded-[10px] hover:bg-black hover:border-white"
          style={{ boxShadow: "10px 10px 10px black" }}
        >
          <img
            src="/cover5.png"
            className="border-[3px] border-black w-[180vh] h-[67vh] rounded-[10px] hover:bg-black hover:border-white"
            style={{ boxShadow: "10px 10px 10px black" }}
          />
        </a>
      </div>

      <div className="border-white border-[1px] w-[10vw] h-[4vh] bg-black relative text-white rounded-tr-[10px] rounded-tl-[10px] mt-[-10vh] ml-[65vw]">
        {" "}
        Hover & Scroll {">>>"}
      </div>
    </>
  );
};

export default ImageSlider;
