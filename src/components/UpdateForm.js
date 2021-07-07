import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function UpdateForm({user, setUser}) {
    const history = useHistory()

    const [formData, setFormData] = useState({
        name: user.name, 
        age: user.age, 
        lifestyle: user.lifestyle
    })

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    function handleUpdateSubmit(e) {
        e.preventDefault();

        fetch(`${process.env.REACT_APP_RAILS_URL}/users/${user.id}`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(user => {
                setUser(user) 
                history.push('/Profile')
            })
    }

    const { name, age, lifestyle } = formData;

    return (
        <div className="update-form">
            <h2>Update Account</h2>
            <form onSubmit={handleUpdateSubmit}>
                <input type="text" name="name" placeholder={name} value={name} onChange={handleChange} />
                <input type="text" name="age" placeholder={age} value={age} onChange={handleChange} />
                <input type="text" name="lifestyle" placeholder={lifestyle} value={lifestyle} onChange={handleChange} />
                <button type="submit">Update Account</button>
            </form>
        </div>
    );
}

export default UpdateForm;