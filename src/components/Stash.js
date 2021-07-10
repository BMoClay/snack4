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
    
    // function handleRemoveFavorite(){
    //     fetch(`${process.env.REACT_APP_RAILS_URL}/favorites/${id}`, {
    //            method: "DELETE"
    //        })
    //         .then(response => response.json())
    //         .then(data => {
    //            console.log(data)
    //           // if we want to remove snack from stash and stay on stash need state
    //            //history.push('/SnackContainer')
    //            const updatedStash = stashFavorites.filter((stashItem) => stashItem.id !== data.id);
    //            setStashFavorites(updatedStash)
    //            history.push('/Stash')
    //         })
    // }

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