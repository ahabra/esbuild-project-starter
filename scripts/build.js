const buildUtils = require('./build.utils')
const Print = require('./console.utils').Print

if (!buildUtils.checkNodeVersion(15)) {
  Print.error('Build failed.')
  process.exitCode = 1
  return
}

const isProd = process.argv[2] === 'prod'

buildUtils.clean()
buildUtils.copyIndexHtml()
buildUtils.build(isProd)
