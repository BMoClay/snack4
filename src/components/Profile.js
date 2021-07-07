import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import UpdateForm from './UpdateForm.js';

function Profile({ user, setUser }) {

    const {name, age, lifestyle} = user 

    const history = useHistory() 

    function handleDeleteClick(){
       fetch(`${process.env.REACT_APP_RAILS_URL}/users/${user.id}`, {
           method: "DELETE"
       })
        .then(response => response.json())
        .then(data => {
            console.log("Data", data)
            history.push("/")
            setUser(null)
        }) 
    }

    return (
        <div>
                <h1>{name}</h1>
                <p className="title">{age}</p>
                <p>{lifestyle}</p>
                <UpdateForm user={user} setUser={setUser}/>
                {/* <p><button>Edit Account</button></p> */}
                <p><button onClick={handleDeleteClick}>Delete Account</button></p>
        </div>
    )
}

export default Profile;