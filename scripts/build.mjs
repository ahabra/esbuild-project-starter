import * as buildUtils from './build.utils.mjs'
import { Print } from './console.utils.mjs'

if (!buildUtils.checkNodeVersion(15)) {
  Print.error('Build failed.')
  process.exit(1)
}

const isProd = process.argv[2] === 'prod'

buildUtils.clean()
buildUtils.copyIndexHtml()
buildUtils.build(isProd)
