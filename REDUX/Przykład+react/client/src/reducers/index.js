import { combineReducers } from 'redux';
const songs = [
  { title: "Aha", duration: '4:05' },
  { title: "Aha2", duration: '5:05' },
  { title: "Aha3", duration: '4:98' }
];
const songsReducer = action => {
  return songs;
};
const selectedSongReducer = (selectedSong = null, action) => {
  console.log(selectedSong)
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  };
  return selectedSong;
};
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});