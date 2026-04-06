import React from 'react'

const UserCard = ({user}) => {
  return (
        <div
        className='block'
        onClick={() => console.log(user)}>
            <h4>{user.name}</h4>
            <p>{user.age}</p>
            <p>{user.city}</p>
            <p>{user.job}</p>
            <img src={user.avatar} alt={user.name} />
            {user.premium && <p style={{color: 'yellow'}}>Премиум</p>}
            
        </div>
  )
}

export default UserCard
