import React from 'react'
import Cards from './component/Cards/Cards'
import Login from './component/login/Login';
import { Routes, Route, Link } from 'react-router-dom';

import { DndProvider } from 'react-dnd';
import * as HTMLBackend from 'react-dnd-html5-backend'
export default function App() {
  return (
    <div>
      <DndProvider backend={ HTMLBackend.HTML5Backend }>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="cards" element={<Cards/>}></Route>
          <Route path='*' element={<Login/>}></Route>
        </Routes>
      {/* <Cards/>
      <Login/> */}
      </DndProvider>
    </div>
  )
}
