import Page from './routes/single-page/single-page.component'
import Navigation from './routes/Navigation/navigation.component'
import About from './routes/About/about.component'
import Programs from './routes/programs/programs.component'
import Courses from './routes/Courses/courses.component'
import Staff from './routes/Staff/staff.component'
import { Outlet } from 'react-router-dom'
import './App.scss'
import { Route, Routes } from 'react-router-dom'


const Contact = () => {
  return <h1>I am Contact</h1>
}

function App() {


  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index  element={<Page />} />
        <Route path='about' element={<About />} />
        <Route path='programs' element={<Programs />} />
        <Route path='courses' element={<Courses />} />
        <Route path='staff' element={<Staff />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
