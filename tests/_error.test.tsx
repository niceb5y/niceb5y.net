import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import NotFound from '../pages/_error'

describe('Pages', () => {
  describe('NotFound', () => {
    it('renders without crashing', () => {
      TestRenderer.create(<NotFound />)
    })
  })
})
