import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList () {
    return this.props.songs.map(song=>(
      <div className="item" key={song.title}>
        <div className="right floated content">
          <button 
            className="ui button primary"
            onClick={() => {this.props.selectSong(song)}}
          >
            Select
          </button>
        </div>
        <div className="content">{song.title}</div>
      </div>
    ));
  }
  render() {
    return (
      <div className='ui divided list'>{this.renderList()}</div>
    )
  }
}
// ta funkcji ma za zadanie  przejsc po calym state (store)
// i tu decydujemy co ma byc przekazane do propsow :)
// 2 argument to obiekt z action-creators. Które beda otwierane na disptach w disptach
 // a jak nie poodamy tego argumentu to mamy bezposrednio metode disptach w props
const mapStateToProps = state => {
  return { songs : state.songs }
}
export default connect(mapStateToProps, { selectSong })(SongList);