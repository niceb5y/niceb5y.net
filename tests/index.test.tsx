import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import Home from '../pages/index'

describe('Pages', () => {
  describe('Home', () => {
    it('renders without crashing', () => {
      TestRenderer.create(<Home />)
    })
  })
})
