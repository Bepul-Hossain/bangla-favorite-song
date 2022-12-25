import AccordionItem from "./AccordionItem";
const Song = ({ songs }) => {

    return (
        <div>
            {songs.map((item, index) =>
                <AccordionItem
                    key={index}
                    item={item}
                />
            )}
        </div>
    )
}

export default Song