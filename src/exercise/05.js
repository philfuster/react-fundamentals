// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box({size = 'small', className = '', style, ...restOfProps}) {
  const sizeClass =
    size === 'small'
      ? 'box--small'
      : size === 'medium'
      ? 'box--medium'
      : size === 'large'
      ? 'box--large'
      : null
  if (sizeClass == null) {
    console.error('invalid size')
    return (
      <div style={{color: 'red'}}>
        Invalid Size. Cannot render Box component.
      </div>
    )
  }
  return (
    <div
      className={`box ${sizeClass} ${className}`}
      style={{fontStyle: 'italic', ...style}}
      {...restOfProps}
    />
  )
}

const smallBox = (
  <Box size="small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box size="medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box>
)
const largeBox = (
  <Box size="large" style={{backgroundColor: 'orange'}}>
    large orange box
  </Box>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box size="invalid" />
    </div>
  )
}

export default App
