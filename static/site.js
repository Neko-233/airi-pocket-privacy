(() => {
  const select = document.querySelector('#language-select')
  const page = document.body.dataset.page

  select?.addEventListener('change', () => {
    const destination = new URL(`../../${select.value}/${page}/`, window.location.href)
    destination.hash = window.location.hash
    window.location.assign(destination)
  })

  const copyButton = document.querySelector('#copy-link')
  copyButton?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      copyButton.textContent = copyButton.dataset.copied
      window.setTimeout(() => {
        copyButton.textContent = copyButton.dataset.label
      }, 1800)
    } catch {
      window.prompt(copyButton.dataset.label, window.location.href)
    }
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
        link.toggleAttribute('aria-current', link.getAttribute('href') === `#${visible.target.id}`)
      })
    }, { rootMargin: '-18% 0px -70% 0px' })
    sections.forEach((section) => observer.observe(section))
  }
})()
