import { lazy, Suspense} from 'react'
import { Route, Routes } from 'react-router-dom'

import Spinner from './components/spinner/spinner.component'

const Page = lazy(() => import( './routes/single-page/single-page.component'))
const Navigation = lazy(() => import( './routes/Navigation/navigation.component'))
const About = lazy(() => import( './routes/About/about.component'))
const Programs = lazy(() => import( './routes/programs/programs.component'))
const Courses = lazy(() => import( './routes/Courses/courses.component'))
const Staff = lazy(() => import( './routes/Staff/staff.component'))
const Contact = lazy(() => import( './routes/Contact/contact.component'))
const Register = lazy(() => import( './routes/Register/register.component'))
const Payment = lazy(() => import( './routes/Payment/payment.component'))
const RegisterationList = lazy(() => import( './routes/Registeration-list/registeration-list.component'))
const Message = lazy(() => import( './routes/mesages/messages.component'))
const Admin = lazy(() => import( './routes/Admin/admin.component'))
const Auth = lazy(() => import( './routes/Auth/auth.component'))
const Review = lazy(() => import( './routes/review/review.component'))
const SignIn = lazy(() => import( './components/sign-in/sign-in.component'))
const Succesful = lazy(() => import( './routes/successful/successful.component'))
const ContactSuccesful = lazy(() => import( './routes/contact-successful/contact-successful.component'))

import './App.scss'


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
    <Suspense fallback={<Spinner />}>
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
    </Suspense>
  )
}

export default App
