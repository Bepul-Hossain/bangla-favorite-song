import SONGS from './data';
import './App.css';

import Songs from './components/Songs';

function App() {

  let songsSortByName = SONGS;
  songsSortByName.sort(function (a, b) {
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
  });

  return (
    <div className='app'>
      <Songs songs={songsSortByName} />
    </div>
  );
}

export default App;
