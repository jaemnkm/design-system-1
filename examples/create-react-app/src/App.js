// DS: import and use react components

import React, { Component } from 'react'

import Button from '@pluralsight/ps-design-system-button'
import Icon from '@pluralsight/ps-design-system-icon'
import * as Text from '@pluralsight/ps-design-system-text'

import './App.css'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Icon size={Icon.sizes.large} id={Icon.ids.code} className="App-logo" />

        <Text.P>
          Edit <Text.Code>src/App.js</Text.Code> and save to reload.
        </Text.P>

        <Button
          href="https://design-system.pluralsight.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn the Design System
        </Button>
      </header>
    </div>
  )
}
