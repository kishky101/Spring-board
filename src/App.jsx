import Page from './routes/single-page/single-page.component'
import Navigation from './routes/Navigation/navigation.component'
import About from './routes/About/about.component'
import Programs from './routes/programs/programs.component'
import Courses from './routes/Courses/courses.component'
import Staff from './routes/Staff/staff.component'
import Contact from './routes/Contact/contact.component'
import Register from './routes/Register/register.component'
import Payment from './routes/Payment/payment.component'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import { addDocToFirebase, getDocFromFirebase } from './utils/firebase/firebase.utils'
import { useEffect } from 'react'
import staffs from './staff'
import courses from './courses'



function App() {

  // useEffect(() => {
  //   addDocToFirebase('courses', courses);
  // }, [])

  useEffect(() => {
  const response  = getDocFromFirebase('Registeration')
    response.then(res => console.table(res.sort((a, b) => a.createdAt - b.createdAt)))
  }, [])

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
        <Route path='payment' element={<Payment />} />
      </Route>
    </Routes>
  )
}

export default App
