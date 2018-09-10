export const distanceFromCenter = (element) => {
  const documentCenter = document.documentElement.clientWidth / 2;
  const elementBoundaries = element.getBoundingClientRect();
  const elementCenter = elementBoundaries.x + (elementBoundaries.width / 2);
  const displacement = elementCenter - documentCenter;
  return displacement;
}
