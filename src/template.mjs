import { languages, pageModifiedDates, pageOrder } from './content.mjs'

const interfaceLabels = {
  en: { support: 'Contact support', intro: 'Privacy & support', contents: 'Explore this document' },
  'zh-Hans': { support: '联系支持', intro: '隐私与支持', contents: '浏览文档目录' },
  'zh-Hant': { support: '聯絡支援', intro: '隱私與支援', contents: '瀏覽文件目錄' },
  ja: { support: 'サポートに連絡', intro: 'プライバシーとサポート', contents: '目次を開く' },
}

const siteOrigin = 'https://neko-233.github.io/airi-pocket-privacy'

/** Escapes content before inserting it into HTML markup. */
function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

/** Renders the limited inline formatting supported by the policy source. */
function renderInline(value) {
  return escapeHtml(value)
    .replaceAll(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replaceAll(/`(.+?)`/g, '<code>$1</code>')
}

/** Builds localized document links with the active page exposed to assistive tools. */
function renderNav(locale, content, currentPage) {
  return pageOrder.map((page) => {
    const current = page === currentPage ? ' aria-current="page"' : ''
    return `<a href="../../${locale}/${page}/"${current}>${escapeHtml(content.navigation[page])}</a>`
  }).join('\n')
}

/** Lists supported languages while retaining the selected locale. */
function renderLanguageOptions(locale) {
  return Object.entries(languages).map(([key, language]) => {
    const selected = key === locale ? ' selected' : ''
    return `<option value="${key}"${selected}>${escapeHtml(language.label)}</option>`
  }).join('\n')
}

/** Renders a policy section without altering its wording or link destinations. */
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

/** Describes the current localized document for search engines. */
function renderStructuredData(locale, page, content) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: content.pages[page].title,
    description: content.pages[page].description,
    inLanguage: locale,
    url: `${siteOrigin}/${locale}/${page}/`,
    dateModified: pageModifiedDates[page],
    isPartOf: {
      '@type': 'WebSite',
      name: 'AIRI Lite Legal',
      url: siteOrigin,
    },
  }
  return JSON.stringify(data).replaceAll('<', '\\u003c')
}

/** Composes the shared accessible document shell for every policy and locale. */
export function renderPage(locale, content, page) {
  const pageContent = content.pages[page]
  const labels = interfaceLabels[locale]
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
  <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#181818">
  <title>${escapeHtml(pageContent.title)} · AIRI Lite</title>
  <meta name="description" content="${escapeHtml(pageContent.description)}">
  <link rel="canonical" href="${siteOrigin}/${locale}/${page}/">
  ${alternateLinks}
  <link rel="icon" type="image/png" href="../../assets/app-icon.png">
  <link rel="apple-touch-icon" href="../../assets/app-icon.png">
  <link rel="stylesheet" href="../../assets/styles.css">
  <script type="application/ld+json">${renderStructuredData(locale, page, content)}</script>
</head>
<body data-language="${locale}" data-page="${page}">
  <a class="skip-link" href="#content">${escapeHtml(content.ui.skip)}</a>
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="../../${locale}/privacy/" aria-label="AIRI Lite Legal">
        <img class="brand-icon" src="../../assets/app-icon.png" width="32" height="32" alt="">
        <span class="brand-name"><strong>AIRI Lite</strong><small>${escapeHtml(labels.intro)}</small></span>
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
      <div class="hero-copy">
      <h1 id="page-title">${escapeHtml(pageContent.title)}</h1>
      <p class="lede">${escapeHtml(pageContent.summary)}</p>
      <div class="metadata">
        <span>${escapeHtml(content.ui.effectiveDate)} <time datetime="${pageModifiedDates[page]}">${escapeHtml(pageContent.effectiveDate)}</time></span>
        <span>${escapeHtml(content.ui.version)} 1.0</span>
      </div>
      </div>
    </section>

    <div class="mobile-nav" aria-label="${escapeHtml(content.ui.primaryNavigation)}">
      ${renderNav(locale, content, page)}
    </div>

    <details class="mobile-toc"><summary>${escapeHtml(labels.contents)}</summary><nav>${toc}</nav></details>
    <div class="document-layout">
      <aside class="toc" aria-label="${escapeHtml(content.ui.onThisPage)}">
        <strong>${escapeHtml(content.ui.onThisPage)}</strong>
        <nav>${toc}</nav>
        <a class="support-shortcut" href="mailto:support-airi@moeru.ai"><span aria-hidden="true">↗</span> ${escapeHtml(labels.support)}</a>
      </aside>
      <article class="legal-document">
        ${pageContent.highlights?.length ? `<ul class="key-points">${pageContent.highlights.map((item) => `<li>${renderInline(item.text)}</li>`).join('')}</ul>` : ''}
        ${sections}
      </article>
    </div>
  </main>

  <footer>
    <p><strong>AIRI Lite</strong> · ${escapeHtml(content.ui.footer)} · <a href="https://github.com/Neko-233/airi-pocket-privacy" rel="external">GitHub</a></p>
    <a class="footer-support" href="mailto:support-airi@moeru.ai">${escapeHtml(labels.support)} ↗</a>
    <button id="copy-link" type="button" data-label="${escapeHtml(content.ui.copyLink)}" data-copied="${escapeHtml(content.ui.copied)}">${escapeHtml(content.ui.copyLink)}</button>
  </footer>
  <script src="../../assets/site.js" defer></script>
</body>
</html>`
}

/** Routes visitors to their preferred supported language with a no-script fallback. */
export function renderRootRedirect() {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>AIRI Lite Legal</title>
  <meta name="description" content="Privacy Policy, Terms of Service, and Account Deletion for AIRI Lite.">
  <link rel="icon" type="image/png" href="./assets/app-icon.png">
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

/** Resolves a locale landing URL to its privacy document. */
export function renderLanguageRedirect(locale, content) {
  return `<!doctype html>
<html lang="${locale}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="refresh" content="0; url=./privacy/">
  <title>${escapeHtml(content.navigation.privacy)} · AIRI Lite</title>
  <link rel="canonical" href="${siteOrigin}/${locale}/privacy/">
  <link rel="icon" type="image/png" href="../assets/app-icon.png">
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
