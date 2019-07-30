import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
  if (!song) return <div>Select a song</div>;
  const { title, duration } = song
  return(
    <div>
      <h2>{title}</h2>
      <h4>Długosć {duration}</h4>
    </div>
  )
};

const mapStateToProps = state => ({ song: state.selectedSong})

export default connect (mapStateToProps)(SongDetail);