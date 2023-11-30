function Player(props) {
    const { id, firstName, lastName, hobbies } = props.data
    const playerHobbies = hobbies.length 
                            ? hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)
                            : <p>No hobbies</p>
    return(
        <div key={id}>
            <h3>{firstName} {lastName}</h3>
            <ul>
                {playerHobbies}
            </ul>
        </div>
    )
}

export default Player