export function moveViewport(instruction, navigation) {
  const viewport = instruction.endpoint.instance.connectedCE.element as HTMLElement;
  let origin = navigation.origin as HTMLElement;
  while (origin != null && origin.tagName.toLowerCase() !== 'au-viewport') {
    origin = origin.parentElement
  }
  console.log('moveViewport', viewport, origin);
  viewport.parentElement.insertBefore(viewport, origin?.nextElementSibling ?? null);
}
