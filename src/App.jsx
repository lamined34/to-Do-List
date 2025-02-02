import './App.css'
import Task from './pages/Task'
import TaskAdd from './pages/TaskAdd'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='flex justify-center h-screen bg-gray-100'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Task />} />
            <Route path="/addTask" element={<TaskAdd />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
