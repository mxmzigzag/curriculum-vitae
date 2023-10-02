export const getActiveSection = (
  sections: Element[],
  setActiveItem: React.Dispatch<React.SetStateAction<any>>
) => {
  const activeSection = sections
    .find((sec) => {
      const bounds = sec.getBoundingClientRect();
      const secPos = bounds.y + window.scrollY;
      const offset = 250;
      const startPoint = secPos - offset;

      return (
        window.scrollY >= startPoint &&
        startPoint + bounds.height > window.scrollY
      );
    })
    ?.getAttribute("id");

  if (activeSection) setActiveItem(activeSection);
};

export const getHashedRoute = (route: string) => `#${route}`;
