export const isMobileDevice = () => {
  const windowWidth = window.innerWidth;

  return windowWidth <= 500;
};
