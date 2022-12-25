import Song from "./Song";
const Songs = ({ songs }) => {
    return (
        <div>
            {songs.map((song, index) =>
                <Song
                    key={song.name}
                    index={++index}
                    song={song}
                />
            )}
        </div>
    )
}

export default Songs