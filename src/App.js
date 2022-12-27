import { useState } from 'react';
import SONGS from './data';
import './App.css';

import Songs from './components/Songs';
import Search from './components/Search';

function App() {

  let songsSortByName = SONGS;
  songsSortByName.sort(function (a, b) {
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
  });

  const [userSearchText, setUserSearchText] = useState("");
  const handleChange = (e) => {
    setUserSearchText(e.target.value);
  }

  return (
    <div className='app'>
      <Search textChange={handleChange} userSearchText={userSearchText} />
      <Songs songs={songsSortByName} userSearchText={userSearchText}/>
    </div>
  );
}

export default App;
