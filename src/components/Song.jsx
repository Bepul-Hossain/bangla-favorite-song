import { useRef, useState } from "react";

const Song = ({ song, index }) => {
  const { name, lyrics, videoLink } = song;
  const [isClick, setIsClick] = useState(false);
  const contentEl = useRef();

  const handleToggle = () => {
    setIsClick(!isClick);
  };

  return (
    <li className={`para ${isClick ? "active" : ""}`}>
      <button className="button" onClick={handleToggle}>
        {index}. &nbsp; {name}
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
        
        <div className="lyrics">
          {videoLink && <a href={videoLink}>Video link<br/></a>}
          {lyrics}
        </div>
      </div>
    </li>
  );
};

export default Song;