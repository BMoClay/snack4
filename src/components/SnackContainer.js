import React, { useState, useEffect } from 'react'
import SnackItem from './SnackItem'

function SnackContainer({ user }) {
  const [snacks, setSnacks] = useState([])
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_RAILS_URL}/snacks`)
      .then(r => r.json())
      .then(snacksArray => setSnacks(snacksArray))
  }, [])

  
  const snackList = 
    snacks.map((snack) => {
      return  <SnackItem key={snack.id} snack={snack} user={user}/>
    })

  return (
      <div>
         {snackList}
      </div>
  );
}

export default SnackContainer;