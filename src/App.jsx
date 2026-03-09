import { Route, Routes } from 'react-router-dom'
import './App.css'
import ResumeSteps from "./pages/ResumeSteps"
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound"
import Download from "./pages/Download"
import UserForm from "./pages/UserForm"
import ViewResume from "./pages/ViewResume"
import Header from "./components/Header"
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
         <Route path="/steps" element={<ResumeSteps/>}/>
          <Route path="/resume/:id/view" element={<ViewResume/>}/>
           <Route path="/form" element={<UserForm/>}/>
           <Route path="/download" element={<Download/>}/>
            <Route path="/*" element={<PageNotFound/>}/>

      </Routes>
      <Footer/>
    </>
  )
}

export default App
