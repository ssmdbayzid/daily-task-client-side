import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header';
import { Routes, Route } from "react-router-dom";
import TodoList from './Pages/TodoList/TodoList';
import CompleteTask from './Pages/CompleteTask/CompleteTask';
import Footer from './Pages/Share/Footer';
import Calander from './Pages/Calander';

function App() {
  

  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/to-do-list" element={<TodoList />} />
        <Route path="/task-complete" element={<CompleteTask></CompleteTask>} />
        <Route path='/calander' element={<Calander></Calander>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
