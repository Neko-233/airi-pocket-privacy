import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { languages, localizedContent, pageOrder } from '../src/content.mjs'
import { renderLanguageRedirect, renderPage, renderRootRedirect } from '../src/template.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const output = resolve(root, 'docs')
const checkOnly = process.argv.includes('--check')

async function expectedFiles() {
  const files = new Map([
    ['index.html', renderRootRedirect()],
    ['.nojekyll', ''],
  ])

  for (const [locale, language] of Object.entries(languages)) {
    const content = localizedContent[locale]
    if (!content) throw new Error(`Missing content for ${locale}`)
    for (const page of pageOrder) {
      if (!content.pages[page]) throw new Error(`Missing ${page} page for ${locale}`)
      files.set(`${locale}/${page}/index.html`, renderPage(locale, content, page))
    }
    files.set(`${locale}/index.html`, renderLanguageRedirect(locale, content))
    if (!language.label) throw new Error(`Missing language label for ${locale}`)
  }

  return files
}

async function validate(files) {
  for (const [path, html] of files) {
    if (!path.endsWith('.html')) continue
    if (!html.includes('<!doctype html>')) throw new Error(`${path}: missing doctype`)
    if (!html.includes('name="viewport"')) throw new Error(`${path}: missing viewport`)
    if (html.includes('undefined')) throw new Error(`${path}: contains undefined content`)
  }

  const legalPages = [...files.keys()].filter((path) => path.endsWith('/index.html') && path.split('/').length === 3)
  const expectedCount = Object.keys(languages).length * pageOrder.length
  if (legalPages.length !== expectedCount) {
    throw new Error(`Expected ${expectedCount} localized legal pages, found ${legalPages.length}`)
  }
}

async function check(files) {
  const mismatches = []
  for (const [path, expected] of files) {
    try {
      const actual = await readFile(resolve(output, path), 'utf8')
      if (actual !== expected) mismatches.push(path)
    } catch {
      mismatches.push(path)
    }
  }
  for (const asset of ['styles.css', 'site.js']) {
    const source = await readFile(resolve(root, 'static', asset), 'utf8')
    try {
      const actual = await readFile(resolve(output, 'assets', asset), 'utf8')
      if (actual !== source) mismatches.push(`assets/${asset}`)
    } catch {
      mismatches.push(`assets/${asset}`)
    }
  }
  if (mismatches.length) throw new Error(`Generated output is stale: ${mismatches.join(', ')}`)
}

async function build(files) {
  await rm(output, { recursive: true, force: true })
  for (const [path, contents] of files) {
    const destination = resolve(output, path)
    await mkdir(dirname(destination), { recursive: true })
    await writeFile(destination, contents)
  }
  await mkdir(resolve(output, 'assets'), { recursive: true })
  await cp(resolve(root, 'static', 'styles.css'), resolve(output, 'assets', 'styles.css'))
  await cp(resolve(root, 'static', 'site.js'), resolve(output, 'assets', 'site.js'))
}

const files = await expectedFiles()
await validate(files)
if (checkOnly) await check(files)
else await build(files)
console.log(`${checkOnly ? 'Checked' : 'Built'} ${Object.keys(languages).length * pageOrder.length} localized legal pages.`)
