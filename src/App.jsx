import { Route, Routes } from 'react-router-dom'
import './App.css'
import { LeftAside } from './components/organisms/leftAside'
import { Navbar } from './components/organisms/navbar'
import { ProjectsPage } from './components/pages/projectsPage'
import { EducationPage } from './components/pages/educationPage'
import { SkillsPage } from './components/pages/skillsPage'
import { ContactPage } from './components/pages/contactPage'

function App() {
  const routes = [
    {
      path: '/',
      component: ProjectsPage
    },
    {
      path: '/education',
      component: EducationPage
    },
    {
      path: '/skills',
      component: SkillsPage
    },
    {
      path: '/contact',
      component: ContactPage
    },
  ]
  return (
    <>
      <LeftAside />
      <Navbar />
      <div className='page'>
        <Routes>
        {
          routes.map((item, pos) => {
            return (
              <Route key={`${item.path}${pos}`} path={item.path} Component={item.component} />
            )
          })
        }
      </Routes>
      </div>
    </>
  )
}

export default App
