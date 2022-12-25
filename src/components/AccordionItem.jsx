import { useRef, useState } from "react";

const AccordionItem = ({ item }) => {
  const { name, lyrics } = item;
  const [clicked, setClicked] = useState(false);
  const contentEl = useRef();
  const handleToggle = () => {
    setClicked((prev) => !prev);
  };
  return (
    <li className={`para ${clicked ? "active" : ""}`}>
      <button className="button" onClick={handleToggle}>
        {name}
        <span className="control">{clicked ? "—" : "+"} </span>
      </button>
      <div
        ref={contentEl}
        className="answer_wrapper"
        style={
            clicked
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="answer">{lyrics}</div>
      </div>
    </li>
  );
};

export default AccordionItem;