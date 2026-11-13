/** Connects locale navigation, link copying, and accessible section tracking. */
(() => {
  const select = document.querySelector('#language-select')
  const page = document.body.dataset.page

  select?.addEventListener('change', () => {
    const destination = new URL(`../../${select.value}/${page}/`, window.location.href)
    destination.hash = window.location.hash
    window.location.assign(destination)
  })

  document.querySelectorAll('[data-copy]').forEach((button) => {
    /** Copies the support address or the current page URL, with a manual fallback. */
    async function copyValue() {
      const value = button.dataset.copy || window.location.href
      try {
        await navigator.clipboard.writeText(value)
        button.textContent = button.dataset.copied
        window.setTimeout(() => { button.textContent = button.dataset.label }, 1800)
      } catch {
        window.prompt(button.dataset.label, value)
      }
    }
    button.addEventListener('click', copyValue)
  })

  const links = [...document.querySelectorAll('.toc a')]
  const sections = links
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean)

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
      if (!visible) return
      links.forEach((link) => {
        if (link.getAttribute('href') === `#${visible.target.id}`) link.setAttribute('aria-current', 'true')
        else link.removeAttribute('aria-current')
      })
    }, { rootMargin: '-18% 0px -70% 0px' })
    sections.forEach((section) => observer.observe(section))
  }
})()
