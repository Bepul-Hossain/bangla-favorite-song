import Song from "./Song";
const Songs = ({ songs }) => {

    return (
        <div>
            {songs.map((item, index) =>
                <Song
                    key={index}
                    item={item}
                />
            )}
        </div>
    )
}

export default Songs