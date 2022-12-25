import AccordionItem from "./AccordionItem";
const Song = ({ songList }) => {

    return (
        <div>
            {songList.map((item, index) =>
                <AccordionItem
                    key={index}
                    item={item}
                />
                // <li key={item.title} className="para"><h2>{item.title}</h2>{item.song}</li>
            )}
        </div>
    )
}

export default Song