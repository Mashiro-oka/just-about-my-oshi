(() => {
  const menu = document.getElementById("menu");
  const button = document.querySelector(".menu-btn");
  if (!menu || !button || !menu.showPopover) return;

  const close = () => menu.hidePopover();

  menu.addEventListener("toggle", (e) => {
    button.setAttribute("aria-expanded", String(e.newState === "open"));
  });

  menu.addEventListener("click", (e) => {
    if (e.target.closest("a")) close();
  });

  addEventListener("scroll", close, { passive: true });

  matchMedia("(min-width: 900px)").addEventListener("change", (e) => {
    if (e.matches) close();
  });
})();
