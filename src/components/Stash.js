import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import FavSnackItem from './FavSnackItem'

function Stash({ user }) {
    let history = useHistory();
    const { id } = user;
    // const [stash, setStash] = useState([])
    const [stashFavorites, setStashFavorites] = useState([])


    useEffect(() => {
        fetch(`${process.env.REACT_APP_RAILS_URL}/users/${id}/favorites`)
            .then(r => r.json())
            .then(data => {
                setStashFavorites(data);
            })
    }, [])

    // changed from favorites vs snacks
    
    console.log(stashFavorites)

    function handleDeleteFavorite(favoriteObj){
        const { id } = favoriteObj
        const updatedStashArray = stashFavorites.filter((favorite) => favorite.id !== id);
        setStashFavorites(updatedStashArray)
    }

    let favoriteSnack = stashFavorites.map((stashItem) => {
        return <FavSnackItem
            // returnFavoriteObj={returnFavoriteObj}
            stashItem={stashItem}
            key={stashItem.id}
            stashFavorites={stashFavorites}
            onRemoveFavorite={handleDeleteFavorite}
            // userId={id}
        />
    })


    return (
        <div>
            {favoriteSnack}
            {/* <div>{stashFavorites}</div> */}
        </div>
    )

}

export default Stash;