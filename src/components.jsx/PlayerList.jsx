import { playerData } from "../utils/playerData";
import Player from "./Player";

/*
first example: just displaying each name. Simple iteration over player data.
const list = playerData.map(player => <h3>{player.firstName} {player.lastName}</h3>)
----------------------
second example: added interation over hobbies array as well
const list = playerData.map(player => {
    return(
        <div key={player.id}>
            <h3>{player.firstName} {player.lastName}</h3>
            <ul>
                {player.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
            </ul>
        </div>
    )
})
----------------------
third example: added object destructuring for cleaner code
const list = playerData.map(player => {
    const { id, firstName, lastName, hobbies } = player
    const playerHobbies = hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)
    return(
        <div key={id}>
            <h3>{firstName} {lastName}</h3>
            <ul>
                {playerHobbies}
            </ul>
        </div>
    )
})
*/

//4th example: passes data into a different component and then allows that component to do the job it needs to do.
const list = playerData.map(player => {
    return (<Player data={player}/>)
})

function PlayerList() {
    return (list)
}

export default PlayerList