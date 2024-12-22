const AdCard = ({ href, img, alt }) => {
  return (
    <div className="border-[2px] border-white hover:border-secondary w-[419px] h-72 shrink-0">
      <a href={href}>
        <img src={img} alt={alt} className="object-fill size-full" />
      </a>
    </div>
  );
};

export default AdCard;
