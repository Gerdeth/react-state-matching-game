import React from 'react'

import './Tile.css'

const Tile = (props) => {
  const dynamicColor=props.selected || props.matched ? {backgroundColor: props.color}:null
  return (
    <div className='Tile'style ={dynamicColor}>
    </div>
  )
}

export default Tile
