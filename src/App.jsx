import { Route, Routes } from 'react-router-dom'
import Page from './routes/single-page/single-page.component'
import Navigation from './routes/Navigation/navigation.component'
import About from './routes/About/about.component'
import Programs from './routes/programs/programs.component'
import Courses from './routes/Courses/courses.component'
import Staff from './routes/Staff/staff.component'
import Contact from './routes/Contact/contact.component'
import Register from './routes/Register/register.component'
import Payment from './routes/Payment/payment.component'
import RegisterationList from './routes/Registeration-list/registeration-list.component'
import Message from './routes/mesages/messages.component'

import './App.scss'
import Admin from './routes/Admin/admin.component'



function App() {

  // useEffect(() => {
  //   addDocToFirebase('courses', courses);
  // }, [])

  // useEffect(() => {
  // const response  = getDocFromFirebase('Registeration')
  //   response.then(res => console.log(res.sort((a, b) => a.createdAt - b.createdAt)))
  // }, [])


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
        <Route path='admin' element={<Admin />}>
          <Route path='register-list' element={<RegisterationList />} />
          <Route path='messages' element={<Message />} />
        </Route>

      </Route>
    </Routes>
  )
}

export default App
