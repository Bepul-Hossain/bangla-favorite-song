import { useRef, useState } from "react";

const Song = ({ item }) => {

  const { name, lyrics } = item;
  const [isClick, setIsClick] = useState(false);
  const contentEl = useRef();
  
  const handleToggle = () => {
    setIsClick(!isClick);
  };

  return (
    <li className={`para ${isClick ? "active" : ""}`}>
      <button className="button" onClick={handleToggle}>
        {name}
        <span className="control">{isClick ? "—" : "+"} </span>
      </button>
      <div
        ref={contentEl}
        className="lyrics_wrapper"
        style={
          isClick
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="lyrics">{lyrics}</div>
      </div>
    </li>
  );
};

export default Song;