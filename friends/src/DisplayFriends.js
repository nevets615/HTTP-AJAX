import React from 'react'


const DisplayFriends = props => {
    return(
        <div>
    {props.friends.map((item, i)=> {
        return(
        <div key={item.id}>
            <h3> {item.name}</h3>
            <p>Age: {item.age}</p>
            <p>Email: {item.email}</p>
        </div>
        )
        }
    )}
    </div>
    )
}

export default DisplayFriends;