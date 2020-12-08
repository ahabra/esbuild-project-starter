/** Utilities used by both build.js and server.js */

const fs = require('fs')
const esbuild = require('esbuild')

const dist = 'target/dist'

function clean() {
  fs.rmSync(dist, { recursive: true, force: true})
}

function copyIndexHtml() {
  let html = fs.readFileSync('src/index.html', {encoding: 'utf8'})
  html = html.replace('<script data-app></script>', '<script data-app src="./app.js"></script>')
  fs.mkdirSync(dist, {recursive: true})
  fs.writeFileSync(dist + '/index.html', html)
}

function build(isProd) {
  const buildOptions = {
    entryPoints: ['src/index.js'],
    bundle: true,
    sourcemap: true,
    outfile: dist + '/app.js',
    minify: !!isProd
  };

  const buildResult = esbuild.build(buildOptions)
  buildResult.catch(() => process.exit(1))
}

module.exports = {
  clean,
  copyIndexHtml,
  build
}