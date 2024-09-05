
import './App.css'
import NavBar from './components/NavBar'
import CreateChallengePage from './pages/CreateChallengePage/CreateChallengePage'
import EntryPage from './pages/EntryPage/EntryPage'
import { Outlet } from 'react-router-dom'


function App() {


  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
