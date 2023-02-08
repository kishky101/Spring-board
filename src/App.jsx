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
import Admin from './routes/Admin/admin.component'
import Auth from './routes/Auth/auth.component'
import Review from './routes/review/review.component'

import './App.scss'
import SignIn from './components/sign-in/sign-in.component'
import Succesful from './routes/successful/successful.component'
import ContactSuccesful from './routes/contact-successful/contact-successful.component'

// import { useEffect } from 'react'
// import { SendMail } from './utils/mailtrap/mailtrap.utils'


function App() {

  

  

  // useEffect(() => {
  
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
        <Route path='review' element={<Review />} />
        <Route path='successful' element={<Succesful />} />
        <Route path='contact-successful' element={<ContactSuccesful />} />
        <Route path='admin' element={<Admin />}>
          <Route index element={<Auth />} />
          <Route path='sign-in' element={<SignIn />} />
          <Route path='register-list' element={<RegisterationList />} />
          <Route path='messages' element={<Message />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
