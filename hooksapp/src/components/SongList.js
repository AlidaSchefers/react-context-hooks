import React, {useState} from 'react' //when do we need to import react? not in App.js but yes here?
//useState is the hook function we can use in a functional component
//why does typing sfc and enter not work for me?
import { v4 as uuidv4 } from 'uuid';


const SongList = () => {
    const [songs, setSongs] = useState([ //returns the state and a function that changes the state, both in an array.
        {title: 'Shally', id: 1},   //how could we import this information from another file? also shouldn't info like this come from backend?
        {title: 'Talking to Myself', id: 2},
        {title: 'Take Yourself Home', id: 3}
    ])
    const addSong = () => {
        setSongs([...songs, {title: 'new song', id: uuidv4()}]) //we pass in the info we want the state to be. it completely replaces the current value of "songs" variable
    }
    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return( <li key={song.id}>{song.title}</li>) //React expects us to provide a key property each time.
                })}
                {/* {songs.map(song => ( <li key={song.id}>{song.title}</li>) //actually changes the objects into HTML instead of just converting for now.
                )} */}
            </ul>
            <button onClick={addSong}>Add a song</button>
        </div>
    );
}

export default SongList