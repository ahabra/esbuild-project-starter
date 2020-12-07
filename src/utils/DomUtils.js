
export function elById(id) {
  return document.getElementById(id)
}

/** Returns an array of elements matching selector */
export function select(selector, root) {
  root = root || document
  // Adding :scope makes selector applies to root's children only
  return Array.from(root.querySelectorAll(':scope ' + selector))
}

/** Get or set an attribute's value */
export function attr(el, name, value) {
  if (value === undefined) {
    return el.getAttribute(name)
  }
  el.setAttribute(name, value)
  return value
}

export function getAttributes(el) {
  const result = {}
  const atts = el.attributes
  if (!atts || !atts.length) return result

  for (let i = 0; i < atts.length; i++) {
    const a = atts[i]
    result[a.name] = a.value
  }
  return result
}

/** Return an array of nodes */
export function htmlToNodes(html) {
  if (!html) return []
  html = html.trim()
  if (html.length === 0) return []

  const template = document.createElement('template')
  template.innerHTML = html
  return Array.prototype.slice.call(template.content.childNodes)
}
