/** Utilities used by both build.js and server.js */

const fs = require('fs')
const esbuild = require('esbuild')
const Print = require('./console.utils').Print

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

function nodeVersion() {
  let v = process.versions.node.split('.')
  if (v.length < 3) {
    v.unshift('0')
  }
  v = v.map(p => parseInt(p, 10))
  return {
    major: v[0],
    minor: v[1],
    patch: v[2]
  }
}

function checkNodeVersion(majorMinimum) {
  const version = nodeVersion()
  if (version.major < majorMinimum) {
    Print.error(`Invalid node version. You have ${version.major}. Require ${majorMinimum}.`)
    return false
  }
  return true
}

module.exports = {
  clean,
  copyIndexHtml,
  build,
  nodeVersion,
  checkNodeVersion
}