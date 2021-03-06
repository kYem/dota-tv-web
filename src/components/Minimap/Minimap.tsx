import React from 'react'
import miniMap from './1024.jpg'
import './Minimap.scss'
import MinimapItem, { mapScale } from './MinimapItem'
import { Player } from '../../models/LiveMatchData'

const sectionStyle = {
  width: `${mapScale}px`,
  height: `${mapScale}px`,
  position: 'relative' as 'relative',
  backgroundImage: `url(${miniMap})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: `${mapScale}px ${mapScale}px`,
  margin: '0 auto',
}


interface Props {
  radiant: Player[],
  dire: Player[],
}

export default class Minimap extends React.Component<Props> {

  static defaultProps = {
    radiant: [],
    dire: [],
  }

  render() {
    return (<div className='liveMatch'>
      <header>
        <h4 className='title'>
          Minimap
        </h4>
        <div id='map' />
        <div className='main-minimap' style={sectionStyle}>
          {this.props.radiant.map(MinimapItem)}
          {this.props.dire.map(MinimapItem)}
        </div>
      </header>
    </div>)
  }
}

