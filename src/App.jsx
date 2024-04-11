import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import ProfilePage from './pages/ProfilePage'
import SignInPage from './pages/SignInPage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={< HomePage/>}/>
        <Route path='/create' element={< CreatePage/>}/>
        <Route path='/signin' element={< SignInPage/>}/>
        <Route path='/profile' element={< ProfilePage/>}/>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
