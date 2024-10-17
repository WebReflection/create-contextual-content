const create = svg => {
  let init = true, range;
  return text => {
    if (init) {
      init = !init;
      range = document.createRange();
      range.selectNodeContents(
        svg ?
          document.createElementNS('http://www.w3.org/2000/svg', 'svg') :
          document.createElement('template')
      );
    }
    const node = range.createContextualFragment(text);
    const { childNodes } = node;
    return childNodes.length === 1 ? node.removeChild(childNodes[0]) : node;
  };
}

/** @type {(text:string) => DocumentFragment | HTMLElement | Node} */
const createHTML = create(false);

/** @type {(text:string) => DocumentFragment | SVGElement | Node} */
const createSVG = create(true);

/**
 * Given some HTML or SVG text, returns either a fragment or the container.
 *  * `"<x></x><y></y>"` returns a fragment
 *  * `"<x><y></y></x>"` returns a container
 * @param {string} text the HTML or SVG text to parse
 * @param {boolean} [svg=false] if `true` the returned content will be SVG
 * @returns {DocumentFragment | HTMLElement | SVGElement | Node}
 */
export default (text, svg = false) => (svg ? createSVG : createHTML)(text);
