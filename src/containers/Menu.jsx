const Menu = () => {
  return (
    <ul className="text-white rounded-br-[10px] rounded-bl-[10px] flex items-center justify-around bg-[#60b3d1] border-[3px] border-black h-[50px]">
      <div className="text-white no-underline hover:text-[#0000ff]">
        <a
          href="/Scope1.html"
          className="text-white no-underline hover:text-[#0000ff]"
        >
          Home
        </a>
      </div>
      <div className="text-white no-underline hover:text-[#0000ff]">
        <a
          href="/shop1.html"
          className="text-[22px] text-black underline hover:text-[#0000ff]"
        >
          | Dash{" "}
        </a>
      </div>
      <div className="text-white no-underline hover:text-[#0000ff]">
        <a
          href="/deals.html"
          className="text-white no-underline hover:text-[#0000ff]"
        >
          | Deals{" "}
        </a>
      </div>
      <div className="text-white no-underline hover:text-[#0000ff]">
        <a href="/" className="text-white no-underline hover:text-[#0000ff]">
          | Services{" "}
        </a>
      </div>
      <div className="text-white no-underline hover:text-[#0000ff]">
        <a href="/" className="text-white no-underline hover:text-[#0000ff]">
          | Jobs{" "}
        </a>
      </div>
      <div className="text-white no-underline hover:text-[#0000ff]">
        <a href="/" className="text-white no-underline hover:text-[#0000ff]">
          | Menus{" "}
        </a>
      </div>
      <div className="text-white no-underline hover:text-[#0000ff]">
        <a
          href="/movies.html"
          className="text-white no-underline hover:text-[#0000ff]"
        >
          | Movies
        </a>
      </div>
      <div className="text-white no-underline hover:text-[#0000ff]">
        <a
          href="/articles1.html"
          className="text-white no-underline hover:text-[#0000ff]"
        >
          | Newsletter{" "}
        </a>
      </div>
      <div className="text-white no-underline hover:text-[#0000ff]">
        <a href="/" className="text-white no-underline hover:text-[#0000ff]">
          | Great Things to try{" "}
        </a>
      </div>
    </ul>
  );
};

export default Menu;
