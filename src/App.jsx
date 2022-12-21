import Navigation from './routes/Navigation/navigation.component'
import { Outlet } from 'react-router-dom'
import './App.scss'
import { Route, Routes } from 'react-router-dom'


const About = () => {
  return <h1>I am About</h1>
}
const Staff = () => {
  return <h1>I am Staff</h1>
}
const Contact = () => {
  return <h1>I am Contact</h1>
}

function App() {


  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route path='about' element={<About />} />
        <Route path='staff' element={<Staff />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
