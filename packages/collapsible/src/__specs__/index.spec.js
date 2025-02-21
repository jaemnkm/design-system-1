import { render } from '@testing-library/react'
import React from 'react'

import Collapsible from '../index.js'

describe('Collapsible', () => {
  it('isOpen toggles open/closed', () => {
    const { container, rerender } = render(
      <Collapsible isOpen>
        <div>content</div>
      </Collapsible>
    )
    const wrapper = container.querySelector('[aria-hidden]')
    expect(wrapper).toHaveAttribute('aria-hidden', 'false')
    expect(wrapper).not.toHaveStyle(`height: 0`)
    rerender(
      <Collapsible isOpen={false}>
        <div>content</div>
      </Collapsible>
    )
    expect(wrapper).toHaveAttribute('aria-hidden', 'true')
    expect(wrapper).toHaveStyle(`height: 0`)
  })
})
