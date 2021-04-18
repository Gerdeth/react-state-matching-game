import React from 'react'

import Button from '../Button'
import TileSelector from '../TileSelector'

const OptionsPanel = (props) => (
  <div>
    <TileSelector numTiles={numTiles} />
    <Button playing={playing}/>
  </div>
)
  
  

export default OptionsPanel
