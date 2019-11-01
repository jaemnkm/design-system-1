import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import * as vars from '../../vars/index.js'

import DatePicker from '../index.js'

describe('DatePicker', () => {
  describe('.appearances', () => {
    it('exists', () => expect(DatePicker.appearances).toEqual(vars.appearances))
  })

  it('renders', () => {
    const { getByTestId } = render(<DatePicker data-testid="mock-component" />)

    expect(getByTestId('mock-component')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = React.createRef()

    render(<DatePicker ref={ref} />)

    expect(ref.current).not.toBeNull()
  })

  describe('onBlur prop', () => {
    it('should call onBlur when onBlur is called for a valid date', () => {
      const onBlurMock = jest.fn()
      const { getByDisplayValue } = render(
        <DatePicker value="8/14/2001" onBlur={onBlurMock} />
      )
      fireEvent.blur(getByDisplayValue('2001'))
      expect(onBlurMock).toHaveBeenCalledTimes(1)
    })

    it('should call onBlur when onBlur is called for an invalid date', () => {
      const onBlurMock = jest.fn()
      const { getByDisplayValue } = render(
        <DatePicker value="8/14/2001" onBlur={onBlurMock} />
      )
      const yearSubField = getByDisplayValue('2001')
      fireEvent.change(yearSubField, { target: { value: '' } })
      fireEvent.blur(yearSubField)
      expect(onBlurMock).toHaveBeenCalledTimes(1)
      expect(onBlurMock).toHaveBeenCalledWith(null, {dd: 14, mm: 8, yyyy: ''})
    })
  })

  describe('with a controlled value', () => {
    let container
    let rerender
    let fields = { day: null, month: null, year: null }

    beforeEach(() => {
      ;({ container, rerender } = render(<DatePicker value="1/20/1993" />))

      fields.day = container.querySelector('[name="dd"]')
      fields.month = container.querySelector('[name="mm"]')
      fields.year = container.querySelector('[name="yyyy"]')
    })

    it('derives initial value from prop', () => {
      expect(fields.day.value).toEqual('20')
      expect(fields.month.value).toEqual('1')
      expect(fields.year.value).toEqual('1993')
    })

    it('should update on prop change', () => {
      rerender(<DatePicker value="8/14/2001" />)

      expect(fields.day.value).toEqual('14')
      expect(fields.month.value).toEqual('8')
      expect(fields.year.value).toEqual('2001')
    })
  })
})
