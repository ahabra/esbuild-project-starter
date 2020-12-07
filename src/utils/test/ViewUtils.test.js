import {expect} from '@esm-bundle/chai'
import { setViewport } from '@web/test-runner-commands'
import * as ViewUtils from '../ViewUtils'

describe('ViewUtils', () => {

  describe('isMobile', () => {
    it('returns true if width < 800px', async() => {
      await setViewport({width: 360, height: 640})
      expect(ViewUtils.isMobile()).to.be.true
    })

    it('returns false if width > 800px', async() => {
      await setViewport({width: 1200, height: 640})
      expect(ViewUtils.isMobile()).to.be.false
    })

  })

})
