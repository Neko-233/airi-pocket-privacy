import { languages, pageOrder } from './content.mjs'

const siteOrigin = 'https://neko-233.github.io/airi-pocket-privacy'

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function renderInline(value) {
  return escapeHtml(value)
    .replaceAll(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replaceAll(/`(.+?)`/g, '<code>$1</code>')
}

function renderNav(locale, content, currentPage) {
  return pageOrder.map((page) => {
    const current = page === currentPage ? ' aria-current="page"' : ''
    return `<a href="../../${locale}/${page}/"${current}>${escapeHtml(content.navigation[page])}</a>`
  }).join('\n')
}

function renderLanguageOptions(locale) {
  return Object.entries(languages).map(([key, language]) => {
    const selected = key === locale ? ' selected' : ''
    return `<option value="${key}"${selected}>${escapeHtml(language.label)}</option>`
  }).join('\n')
}

function renderSection(section) {
  const paragraphs = (section.paragraphs ?? [])
    .map((paragraph) => `<p>${renderInline(paragraph)}</p>`)
    .join('\n')
  const items = section.items?.length
    ? `<ul>${section.items.map((item) => `<li>${renderInline(item)}</li>`).join('')}</ul>`
    : ''
  const steps = section.steps?.length
    ? `<ol class="steps">${section.steps.map((step) => `<li>${renderInline(step)}</li>`).join('')}</ol>`
    : ''
  const links = section.links?.length
    ? `<div class="resource-links">${section.links.map((link) => `<a href="${escapeHtml(link.url)}" rel="external noreferrer">${escapeHtml(link.label)}<span aria-hidden="true">↗</span></a>`).join('')}</div>`
    : ''
  const note = section.note
    ? `<aside class="note"><span aria-hidden="true">i</span><p>${renderInline(section.note)}</p></aside>`
    : ''
  return `<section id="${escapeHtml(section.id)}">
    <h2>${escapeHtml(section.title)}</h2>
    ${paragraphs}${items}${steps}${links}${note}
  </section>`
}

function renderStructuredData(locale, page, content) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: content.pages[page].title,
    description: content.pages[page].description,
    inLanguage: locale,
    url: `${siteOrigin}/${locale}/${page}/`,
    dateModified: '2026-08-04',
    isPartOf: {
      '@type': 'WebSite',
      name: 'AIRI Lite Legal',
      url: siteOrigin,
    },
  }
  return JSON.stringify(data).replaceAll('<', '\\u003c')
}

export function renderPage(locale, content, page) {
  const pageContent = content.pages[page]
  const direction = languages[locale].direction ?? 'ltr'
  const alternateLinks = Object.keys(languages)
    .map((language) => `<link rel="alternate" hreflang="${language}" href="${siteOrigin}/${language}/${page}/">`)
    .join('\n')
  const toc = pageContent.sections
    .map((section) => `<a href="#${escapeHtml(section.id)}">${escapeHtml(section.title)}</a>`)
    .join('\n')
  const sections = pageContent.sections.map(renderSection).join('\n')

  return `<!doctype html>
<html lang="${locale}" dir="${direction}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="color-scheme" content="light dark">
  <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff">
  <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#111111">
  <title>${escapeHtml(pageContent.title)} · AIRI Lite</title>
  <meta name="description" content="${escapeHtml(pageContent.description)}">
  <link rel="canonical" href="${siteOrigin}/${locale}/${page}/">
  ${alternateLinks}
  <link rel="stylesheet" href="../../assets/styles.css">
  <script type="application/ld+json">${renderStructuredData(locale, page, content)}</script>
</head>
<body data-language="${locale}" data-page="${page}">
  <a class="skip-link" href="#content">${escapeHtml(content.ui.skip)}</a>
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="../../${locale}/privacy/" aria-label="AIRI Lite Legal">
        <strong>AIRI Lite</strong>
        <small>${escapeHtml(content.ui.legal)}</small>
      </a>
      <nav class="primary-nav" aria-label="${escapeHtml(content.ui.primaryNavigation)}">
        ${renderNav(locale, content, page)}
      </nav>
      <label class="language-control">
        <span class="sr-only">${escapeHtml(content.ui.language)}</span>
        <select id="language-select" aria-label="${escapeHtml(content.ui.language)}">
          ${renderLanguageOptions(locale)}
        </select>
        <span aria-hidden="true">⌄</span>
      </label>
    </div>
  </header>

  <main id="content">
    <section class="hero" aria-labelledby="page-title">
      <div class="eyebrow">AIRI Lite · iOS</div>
      <h1 id="page-title">${escapeHtml(pageContent.title)}</h1>
      <p class="lede">${escapeHtml(pageContent.summary)}</p>
      <div class="metadata">
        <span>${escapeHtml(content.ui.effectiveDate)} <time datetime="2026-08-04">${escapeHtml(content.ui.date)}</time></span>
        <span>${escapeHtml(content.ui.version)} 1.0</span>
      </div>
    </section>

    <div class="mobile-nav" aria-label="${escapeHtml(content.ui.primaryNavigation)}">
      ${renderNav(locale, content, page)}
    </div>

    <div class="document-layout">
      <aside class="toc" aria-label="${escapeHtml(content.ui.onThisPage)}">
        <strong>${escapeHtml(content.ui.onThisPage)}</strong>
        ${toc}
      </aside>
      <article class="legal-document">
        ${pageContent.highlights?.length ? `<ul class="key-points">${pageContent.highlights.map((item) => `<li>${renderInline(item.text)}</li>`).join('')}</ul>` : ''}
        ${sections}
      </article>
    </div>
  </main>

  <footer>
    <p><strong>AIRI Lite</strong> · ${escapeHtml(content.ui.footer)} · <a href="https://github.com/Neko-233/airi-pocket-privacy" rel="external">GitHub</a></p>
    <button id="copy-link" type="button" data-label="${escapeHtml(content.ui.copyLink)}" data-copied="${escapeHtml(content.ui.copied)}">${escapeHtml(content.ui.copyLink)}</button>
  </footer>
  <script src="../../assets/site.js" defer></script>
</body>
</html>`
}

export function renderRootRedirect() {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>AIRI Lite Legal</title>
  <meta name="description" content="Privacy Policy, Terms of Service, and Account Deletion for AIRI Lite.">
  <link rel="stylesheet" href="./assets/styles.css">
  <script>
    (() => {
      const value = (navigator.languages?.[0] || navigator.language || 'en').toLowerCase()
      const language = value.startsWith('zh-tw') || value.startsWith('zh-hk') || value.startsWith('zh-hant')
        ? 'zh-Hant'
        : value.startsWith('zh') ? 'zh-Hans' : value.startsWith('ja') ? 'ja' : 'en'
      location.replace('./' + language + '/privacy/')
    })()
  </script>
</head>
<body class="landing">
  <main>
    <h1>AIRI Lite Legal</h1>
    <p>Choose a language to view the Privacy Policy, Terms of Service, and Account Deletion instructions.</p>
    <nav aria-label="Languages">
      <a href="./zh-Hans/privacy/">简体中文</a>
      <a href="./zh-Hant/privacy/">繁體中文</a>
      <a href="./en/privacy/">English</a>
      <a href="./ja/privacy/">日本語</a>
    </nav>
  </main>
</body>
</html>`
}

export function renderLanguageRedirect(locale, content) {
  return `<!doctype html>
<html lang="${locale}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="refresh" content="0; url=./privacy/">
  <title>${escapeHtml(content.navigation.privacy)} · AIRI Lite</title>
  <link rel="canonical" href="${siteOrigin}/${locale}/privacy/">
  <link rel="stylesheet" href="../assets/styles.css">
  <script>location.replace('./privacy/')</script>
</head>
<body class="landing">
  <main>
    <h1>AIRI Lite</h1>
    <p><a href="./privacy/">${escapeHtml(content.navigation.privacy)}</a></p>
  </main>
</body>
</html>`
}
