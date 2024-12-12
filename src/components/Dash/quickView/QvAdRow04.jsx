const QvAdRow04 = ({ ad }) => {
  return (
    <div className="flex w-full pr-6 lg:pr-0 gap-6 pb-6 justify-between xl:justify-center overflow-x-auto">
      <div />

      <div className="border-[2px] border-white hover:border-secondary w-[860px] h-72 shrink-0">
        <a href={ad.href}>
          <img src={ad.img} alt={ad.alt} className="object-fill size-full" />
        </a>
      </div>
      <div />
    </div>
  );
};

export default QvAdRow04;
