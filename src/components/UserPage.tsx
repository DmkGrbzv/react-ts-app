import React, { FC } from 'react'
import { ITodo, IUser } from '../types/types';
import { useState, useEffect } from 'react';
import UserItem from './UserItem';
import List from './List';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserPage:FC = () => {
  const [users,setUsers] = useState<IUser[]>([]);
  const history = useNavigate();

  useEffect(()=>{
    fetchUsers();
    
  },[]);
  async function fetchUsers(){
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div>
      <div>UserPage</div>
      <List items={users} renderItem={(user:IUser)=><UserItem onClick={(user)=>history('/users/'+ user.id)} user={user} key={user.id}></UserItem>}></List> 
    </div>
  )
}

export default UserPage