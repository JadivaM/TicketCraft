import Home from './components/Home';
import Board from './pages/Board';
// import TicketBoard from './components/TicketBoard';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {DndContext} from '@dnd-kit/core';
import './App.css';

function App() {
  return (
    <DndContext>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/board"
          element={<Board />}
        />
        {/* <Route
          path="/tickets"
          element={<TicketBoard />}
        /> */}
      </Routes>
    </BrowserRouter>
    </DndContext>
  );
}

export default App;
