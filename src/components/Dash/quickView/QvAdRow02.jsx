const QvAdRow02 = ({ ad1, ad2 }) => {
  return (
    <div className="flex w-full pr-6 pb-6 gap-6 justify-between xl:justify-center overflow-x-auto">
      <div />

      <div className="border-[2px] border-white hover:border-secondary size-72 shrink-0">
        <a href={ad1.href}>
          <img src={ad1.img} alt={ad1.alt} className="object-fill size-full" />
        </a>
      </div>

      <div className="border-[2px] border-white hover:border-secondary w-[550px] h-72 shrink-0">
        <a href={ad2.href}>
          <img src={ad2.img} alt={ad2.alt} className="object-fill size-full" />
        </a>
      </div>
    </div>
  );
};

export default QvAdRow02;
