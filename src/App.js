import SongList from './data';
import './App.css';

import Song from './Song';

function App() {

  return (
    <Song songList = {SongList}/>
  );
}

export default App;
