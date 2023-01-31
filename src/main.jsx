import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { StaffProvider } from './context/staff/staff.context'
import { CourseProvider } from './context/courses/courses.context'
import { RegisterationProvider } from './context/registeration/registeration.context'
import { ContactProvider } from './context/contact/contact.context'
import App from './App'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <RegisterationProvider>
        <ContactProvider>
          <CourseProvider>
            <StaffProvider>
              <App />
            </StaffProvider>
          </CourseProvider>
        </ContactProvider>
      </RegisterationProvider>
    </BrowserRouter>
  
)
