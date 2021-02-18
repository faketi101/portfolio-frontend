const ToTop = () => {
  window.addEventListener("scroll", () => {
    const toTop = document?.getElementById("toTop");
    if (window.scrollY > 97) {
      toTop.classList.add("visible");
    }
    if (window.scrollY < 97) {
      toTop.classList.remove("visible");
    }
  });
  const totop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div onClick={totop} id="toTop" title="Scroll to top">
      <i className="fas fa-arrow-up"></i>
    </div>
  );
};

export default ToTop;