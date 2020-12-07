/** This is an example of how to mock dependencies  */

import {expect} from '@esm-bundle/chai'

// This will be mocked
class Resource {
  fetchData() {
    return 21
  }
}

class Service {
  constructor(resource) {
    this.resource = resource
  }

  findMeaningOfLife() {
    const data = this.resource.fetchData()
    return data * 2
  }
}

describe('Mocking using inline function', () => {
  let sut, mockedResource

  beforeEach(() => {
    mockedResource = new Resource()
    sut = new Service(mockedResource)
  })

  it('finds meaning of life', ()=> {
    mockedResource.fetchData = () => 1
    const mol = sut.findMeaningOfLife()
    expect(mol).to.equal(2)
  })

})