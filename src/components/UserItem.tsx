import React, { FC } from 'react'
import { IUser } from '../types/types';

interface UserItemProps{
  user:IUser,
  onClick:(user:IUser)=>void
}

const UserItem:FC<UserItemProps> = ({user, onClick}) => {
  return (
    <div onClick={()=>onClick(user)}>
        {user.id}. {user.name} Живет в {user.address.city} на улице {user.address.street}
    </div>
  )
}

export default UserItem;
