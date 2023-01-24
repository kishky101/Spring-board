import Page from './routes/single-page/single-page.component'
import Navigation from './routes/Navigation/navigation.component'
import About from './routes/About/about.component'
import Programs from './routes/programs/programs.component'
import Courses from './routes/Courses/courses.component'
import Staff from './routes/Staff/staff.component'
import Contact from './routes/Contact/contact.component'
import Register from './routes/Register/register.component'
import './App.scss'
import { Route, Routes } from 'react-router-dom'




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
        <Route path='register' element={<Register />} />
      </Route>
    </Routes>
  )
}

export default App
