import { storiesOf } from '@storybook/react'

import * as glamor from 'glamor'
import React, { Fragment } from 'react'

import Carousel from '../index.js'

const MockItem = props => (
  <div
    {...glamor.css({
      alignItems: 'center',
      background: 'pink',
      display: 'flex',
      height: '150px',
      justifyContent: 'center'
    })}
    data-testid="mock-item"
    {...props}
  />
)

storiesOf('Carousel/items', module)
  .add('one item', _ => (
    <Carousel>
      <MockItem>just one item</MockItem>
    </Carousel>
  ))
  .add('two items', _ => (
    <Carousel>
      <MockItem>first item</MockItem>
      <MockItem>second item</MockItem>
    </Carousel>
  ))
  .add('many items', _ => (
    <Carousel>
      {new Array(21).fill(null).map((_, index) => (
        <MockItem key={index}>item: {index + 1}</MockItem>
      ))}
    </Carousel>
  ))
  .add('dynamic items', _ => {
    function DynamicItems() {
      const [count, updateCount] = React.useState(4)

      const add = () => updateCount(count + 1)
      const remove = () => updateCount(count - 1)

      return (
        <Fragment>
          <Carousel>
            {new Array(count).fill(null).map((_, index) => (
              <MockItem key={index}>item: {index + 1}</MockItem>
            ))}
          </Carousel>

          <div
            {...glamor.css({
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              margin: '10px auto'
            })}
          >
            <button disabled={count <= 1} onClick={remove}>
              remove
            </button>

            <button onClick={add}>add</button>
          </div>
        </Fragment>
      )
    }

    return <DynamicItems />
  })

const sizeStories = storiesOf('Carousel/size', module)

Object.values(Carousel.sizes).forEach(size => {
  sizeStories.add(size, _ => (
    <Carousel size={size}>
      {new Array(13).fill(null).map((_, index) => (
        <MockItem key={index}>item: {index + 1}</MockItem>
      ))}
    </Carousel>
  ))
})
