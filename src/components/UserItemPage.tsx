import React, { FC } from 'react'
import { useState,useEffect } from 'react';
import { IUser } from '../types/types';
import axios from 'axios';
import { useParams,Params, useNavigate} from 'react-router-dom';

interface IUserItemPageParams extends Params{
  id: string;
}
const UserItemPage:FC = ()=> {
  const [user,setUser] = useState<IUser | null>(null);
  const params = useParams<IUserItemPageParams>();
  const history = useNavigate();

  useEffect(()=>{
    fetchUsers();
    
  },[]);
  async function fetchUsers(){
    try {
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/'+ params?.id);
      setUser(response.data);
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div>
      <button onClick={()=>history('/users')}>Back</button>
      <h1>Page is {user?.name}</h1>
      <div>Email: {user?.email}</div>
    </div>
  )
}

export default UserItemPage