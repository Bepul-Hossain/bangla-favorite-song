const Song = ({ songList }) => {
    let lists = [];
    songList.map((item) => lists.push(
        <li key={item.title} className="ok"><h3>{item.title}</h3>{item.song}</li>
    ))
    return (
        <div>
            {lists}
        </div>
    )
}

export default Song