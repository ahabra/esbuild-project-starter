const buildUtils = require('./build.utils')

const isProd = process.argv[2] === 'prod'

buildUtils.clean()
buildUtils.copyIndexHtml()
buildUtils.build(isProd)
