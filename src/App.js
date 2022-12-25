import SONGS from './data';
import './App.css';

import Song from './components/Song';

function App() {
  return (
    <div className='app'>
      <Song songs={SONGS} />
    </div>
  );
}

export default App;
