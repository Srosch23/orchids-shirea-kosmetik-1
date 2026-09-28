// Kopiert die statische Website nach dist/ (Ausgabeordner für Vercel).
// Keine Abhängigkeiten, kein Framework: nur die Dateien, die live gehen sollen.
import { cpSync, mkdirSync, rmSync } from 'node:fs'

const out = 'dist'
const files = ['index.html', 'impressum.html', 'datenschutz.html', 'agb.html', 'favicon.svg', 'robots.txt', 'sitemap.xml', 'site.webmanifest']

rmSync(out, { recursive: true, force: true })
mkdirSync(out)
for (const f of files) cpSync(f, `${out}/${f}`)
// Originalbilder (assets/img/src) bleiben im Repository, werden aber nicht veröffentlicht.
cpSync('assets', `${out}/assets`, { recursive: true, filter: (src) => !src.includes('assets/img/src') })

console.log('dist/ bereit')
