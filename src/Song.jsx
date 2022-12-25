const Song = ({ songList }) => {
    let lists = [];
    songList.map((item) => lists.push(
        <li key={item.title} className="para"><h2>{item.title}</h2>{item.song}</li>
    ))
    return (
        <div>
            {lists}
        </div>
    )
}

export default Song