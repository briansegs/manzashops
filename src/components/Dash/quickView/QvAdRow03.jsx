const QvAdRow03 = ({ ad1, ad2, ad3 }) => {
  return (
    <div className="flex pr-6 w-full pb-6 gap-6 justify-between xl:justify-center overflow-x-auto">
      <div />

      {[ad1, ad2, ad3].map(({ href, img, alt, id }) => (
        <div
          key={id}
          className="border-[2px] border-white hover:border-secondary size-[271px] shrink-0"
        >
          <a href={href}>
            <img src={img} alt={alt} className="object-fill size-full" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default QvAdRow03;
