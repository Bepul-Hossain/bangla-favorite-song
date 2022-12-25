import { useRef, useState } from "react";

const AccordionItem = ({ item }) => {
  const { title, song } = item;
  const [clicked, setClicked] = useState(false);
  const contentEl = useRef();
  const handleToggle = () => {
    setClicked((prev) => !prev);
  };
  return (
    <li className={`para ${clicked ? "active" : ""}`}>
      <button className="button" onClick={handleToggle}>
        {title}
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
        <div className="answer">{song}</div>
      </div>
    </li>
  );
};

export default AccordionItem;