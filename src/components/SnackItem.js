import React, { useState } from 'react'
import '../FavSnackItem.css'

function SnackItem({ snack, user }) {

  
  const [errors, setErrors] = useState([]);

  function handleAddToStash(e) {
    const favorite = { 
      user_id: user.id,
      snack_id: snack.id
    }
    
    fetch(`${process.env.REACT_APP_RAILS_URL}/favorites`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(favorite),
    })
    .then(response => response.json())
    .then(data => {
      if (data.errors) {
        setErrors(data.errors);
      } else {
        console.log('Success:', data);
      }
    })
  }

  const { img, name, id } = snack

  let img_url = `${process.env.REACT_APP_RAILS_URL}/${img}`

  
    return (
        <div className="snack-card">
            <h4 className="snack-title">{name}</h4>
            <img src={img_url}/>
            <br />
            {/* {errors ? (
              <>
              <p>{errors}</p>
              </>
            ) : (
              <>
              <button onClick={handleAddToStash} >Add to Favorites</button>
              </>
            )} */}
            <button className="stash-button" onClick={handleAddToStash} >Add to Favorites</button>
            {/* <hr className="line"/> */}
            <p className="snack-title">{errors}</p>
            <br></br>
            <br></br>
        </div>
    );
}

export default SnackItem;