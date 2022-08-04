import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './App.css';
import Card, { CardVariant } from './components/Card';
import EventsExampl from './components/EventsExampl';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import UserPage from './components/UserPage';
import TodosPage from './components/TodosPage';
import { Link } from 'react-router-dom';
import UserItemPage from './components/UserItemPage';
import TodosItemPage from './components/TodosItemPage';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
      Worked!
      {/* <EventsExampl></EventsExampl>
      <Card onClick={(num)=>console.log('click',num)} variant={CardVariant.primary} width='200px' height='200px'>
        <button>Button</button>
      </Card> */}
      <div>
        <Link to={'/users'}>Пользователи</Link>
        <Link to={'/todos'}>Список дел</Link>
      </div>
        <Routes>
          <Route path={'/users'} element={<UserPage/>} />
          <Route path={'/users/:id'} element={<UserItemPage/>} />
          <Route path={'/todos'} element={<TodosPage/>} />
          <Route path={'/todos/:id'} element={<TodosItemPage/>} />
          <Route path={'/*'} element={<UserPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
