import React, { useState, useEffect } from 'react'
import FavSnackItem from './FavSnackItem'

function Stash({ user }) {

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

    let favoriteSnack = stashFavorites.map((stashItem) => {
        return <FavSnackItem
            // returnFavoriteObj={returnFavoriteObj}
            stashItem={stashItem}
            key={stashItem.id}
            // userId={id}
        />

    })

    return (
        <div>
            {favoriteSnack}
        </div>
    )

}

export default Stash;