export const getActiveSection = (
  sections: Element[],
  setActiveItem: React.Dispatch<React.SetStateAction<any>>
) => {
  const activeSection = sections
    .find((sec) => {
      const bounds = sec.getBoundingClientRect();

      return (
        bounds.y <= window.scrollY && bounds.y + bounds.height > window.scrollY
      );
    })
    ?.getAttribute("data-id");
  if (activeSection) setActiveItem(activeSection);
};
