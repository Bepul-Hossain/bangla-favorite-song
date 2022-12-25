import SongList from './data';
import './App.css';

import Song from './Song';

function App() {
  return (
    <div className='app'>
      <Song songList={SongList} />
    </div>
  );
}

export default App;
