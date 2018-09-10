export const distanceFromCenter = (element) => {
  console.log('ELEMENT', element);
  const documentCenter = document.documentElement.clientWidth / 2;
  console.log('DOC CENTER', documentCenter);
  const elementBoundaries = element.getBoundingClientRect();
  console.log('BOUNDS', elementBoundaries);
  const elementCenter = elementBoundaries.x + (elementBoundaries.width / 2);
  console.log('EL CENTER', elementCenter);
  const displacement = elementCenter - documentCenter;
  console.log('DISPLACEMENT', displacement);
  return displacement;
}
