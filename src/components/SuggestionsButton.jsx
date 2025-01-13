const SuggestionsButton = ({
  id,
  title,
  scrollingProps: {
    activeButton,
    isScrollingRef,
    clickedButtonRef,
    setActiveButton,
  },
  offset,
}) => {
  const scrollToElement = (id) => {
    const targetElement = document.getElementById(id);

    if (targetElement) {
      isScrollingRef.current = true;
      clickedButtonRef.current = id;
      setActiveButton(id);

      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });

      // Stop scrolling after a delay to allow smooth scrolling to complete
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 500); // Adjust this duration to match scroll speed
    }
  };
  return (
    <button
      key={id}
      type="button"
      onClick={() => scrollToElement(id)}
      className={` ${
        activeButton === id
          ? "text-secondary border-secondary"
          : "text-white border-white"
      } border-[1px] rounded-[10px] flex w-fit justify-center items-center hover:border-secondary hover:text-secondary shrink-0`}
    >
      <p className="capitalize text-2xl px-5 py-2">{title}</p>
    </button>
  );
};

export default SuggestionsButton;
