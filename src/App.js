import SONGS from './data';
import './App.css';

import Songs from './components/Songs';

function App() {
  return (
    <div className='app'>
      <Songs songs={SONGS} />
    </div>
  );
}

export default App;
