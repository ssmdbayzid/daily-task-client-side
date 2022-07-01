import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header';
import { Routes, Route } from "react-router-dom";
import TodoList from './Pages/TodoList/TodoList';
import CompleteTask from './Pages/CompleteTask/CompleteTask';

function App() {
  

  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/to-do-list" element={<TodoList />} />
        <Route path="/task-complete" element={<CompleteTask></CompleteTask>} />
      </Routes>
    </div>
  );
}

export default App;
