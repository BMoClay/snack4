import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../FavSnackItem.css'

function FavSnackItem({ stashItem, stashFavorites, onRemoveFavorite }) {
  let history = useHistory()
  // const [currentStash, setCurrentStash] = useState([])

  const { id, snack } = stashItem;
// const { userId, snackId} = favorite

// const favoriteObj = {
//   favUserId: favorites.id,
//   snackId: favorites.snackId,
//   favoritesId: favorites.favoritesId
// }
console.log({snack})
console.log({stashItem})
console.log({stashFavorites})


let img_url = `${process.env.REACT_APP_RAILS_URL}/${snack.img}`

// How do we get favorites id? // 

function handleRemoveFavorite(){
    fetch(`${process.env.REACT_APP_RAILS_URL}/favorites/${id}`, {
           method: "DELETE"
       })
        .then(response => response.json())
        .then(data => {
           console.log(data)
          // if we want to remove snack from stash and stay on stash need state
           //history.push('/SnackContainer'
          onRemoveFavorite(data)
        })
}

  return (
      <div className="snack-card">
           <h4 className="snack-title">{snack.name}</h4>
            <img src={img_url}/>
            <br />
            <button className="stash-button" onClick={handleRemoveFavorite} >Eat Snack</button>
             {/* <hr className="line"/> */}
             <br></br>
            <br></br>
      </div>
  );
}

export default FavSnackItem;